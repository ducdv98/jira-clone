import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';

import { User } from '@app/core/interfaces';
import * as fromStore from '@app/core/store';
import { Destroyable, takeUntilDestroyed } from '@app/shared/utils';

@Destroyable()
@Component({
  selector: 'app-assignee-filter-control',
  templateUrl: './assignee-filter-control.component.html',
  styleUrls: ['./assignee-filter-control.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AssigneeFilterControlComponent),
    multi: true,
  }]
})
export class AssigneeFilterControlComponent implements OnInit, ControlValueAccessor {
  users$!: Observable<Array<User>>;
  users: Array<User> = [];

  selectedAssignees: Array<string> = [];

  private onTouched!: Function;
  private onChanged!: Function;

  constructor(private store: Store<fromStore.AppState>) {
    this.users$ = this.store.pipe(select(fromStore.allUsers));

    this.users$.pipe(
      takeUntilDestroyed(this),
      tap(users => (this.users = users))
    ).subscribe();
  }

  ngOnInit(): void {
  }

  writeValue(assignees: Array<string>): void {
    this.selectedAssignees = [...assignees];
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onChangeAssignee(uid: string): void {
    if (this.selectedAssignees.includes(uid)) {
      this.selectedAssignees = this.selectedAssignees.filter(id => id !== uid);
    } else {
      this.selectedAssignees = [...this.selectedAssignees, uid];
    }

    this.onChanged(this.selectedAssignees);
  }

}
