import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

import { filter, tap } from 'rxjs/operators';

import { User } from '@app/core/interfaces';
import { Destroyable, takeUntilDestroyed } from '@app/shared/utils';

@Destroyable()
@Component({
  selector: 'app-card-assignee',
  templateUrl: './card-assignee.component.html',
  styleUrls: ['./card-assignee.component.scss']
})
export class CardAssigneeComponent implements OnInit {
  @Input() users: Array<User> | null = [];
  @Input() assignee!: User | null | undefined;
  @Input() cardId!: string;

  @Output() updateAssignee = new EventEmitter();

  assigneeControl: FormControl;

  editMode = false;

  constructor() {
    this.assigneeControl = new FormControl(null);
  }

  ngOnInit(): void {
    this.assigneeControl.valueChanges.pipe(
      filter(value => !!value),
      takeUntilDestroyed(this),
      tap(assignee => {
        this.updateAssignee.emit({
          id: this.cardId,
          assigneeId: assignee.id
        });
      })
    ).subscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const assignee = changes.assignee;

    if (assignee && assignee.previousValue !== assignee.currentValue && this.assignee) {
      this.assigneeControl.patchValue(this.assignee, { emitEvent: false });
    }
  }

  onEnableEditMode(): void {
    this.editMode = true;
  }

}
