import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { tap } from 'rxjs/operators';

import { Destroyable, takeUntilDestroyed } from '@app/shared/utils';
import { CardFilter } from '@app/core/interfaces';

@Destroyable()
@Component({
  selector: 'app-board-action',
  templateUrl: './board-action.component.html',
  styleUrls: ['./board-action.component.scss']
})
export class BoardActionComponent implements OnInit {
  @Input() clearFiltersVisible!: boolean | null;
  @Output() updateCardFilters = new EventEmitter();

  filterFormGroup: FormGroup;
  groupByControl: FormControl;

  contextMenuVisible = false;

  constructor() {
    this.groupByControl = new FormControl('None');

    this.filterFormGroup = new FormGroup({
      assignees: new FormControl([]),
      labels: new FormControl([]),
      types: new FormControl([]),
    });
  }

  ngOnInit(): void {
    this.filterFormGroup.valueChanges.pipe(
      takeUntilDestroyed(this),
      tap(filters => this.updateFilters(filters))
    ).subscribe();
  }

  updateFilters(filters: CardFilter): void {
    this.updateCardFilters.emit(filters);
  }

  clearFilters(): void {
    this.filterFormGroup.reset({ assignees: [], labels: [], types: [] });
  }

}
