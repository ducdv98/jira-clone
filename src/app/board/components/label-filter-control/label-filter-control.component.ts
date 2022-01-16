import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';

import * as fromStore from '@app/core/store';
import { Destroyable, takeUntilDestroyed } from '@app/shared/utils';

@Destroyable()
@Component({
  selector: 'app-label-filter-control',
  templateUrl: './label-filter-control.component.html',
  styleUrls: ['./label-filter-control.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => LabelFilterControlComponent),
    multi: true,
  }]
})
export class LabelFilterControlComponent implements OnInit, ControlValueAccessor {
  labels$!: Observable<Array<string>>;
  labels: Array<string> = [];

  contextMenuVisible = false;

  selectedLabels: Array<string> = [];
  private onTouched!: Function;
  private onChanged!: Function;

  constructor(private store: Store<fromStore.AppState>) {
  }

  ngOnInit(): void {
    this.labels$ = this.store.pipe(select(fromStore.allLabels));
    this.labels$.pipe(
      takeUntilDestroyed(this),
      tap(labels => (this.labels = labels))
    ).subscribe();
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(selectedLabels: Array<string>): void {
    this.selectedLabels = [...selectedLabels];
  }

  onChangeFilter(selected: boolean, label: string) {
    if (this.selectedLabels.includes(label)) {
      this.selectedLabels = this.selectedLabels.filter(l => l !== label);
    } else {
      this.selectedLabels = [...this.selectedLabels, label]
    }

    this.onChanged(this.selectedLabels);
  }
}
