import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '@app/core/store';
import { CardFilter } from '@app/core/interfaces';

@Component({
  selector: 'app-column-container',
  templateUrl: './board-container.component.html',
  styleUrls: ['./board-container.component.scss']
})
export class BoardContainerComponent implements OnInit {
  clearFiltersVisible$!: Observable<boolean>;

  constructor(private store: Store<fromStore.AppState>) {
  }

  ngOnInit(): void {
    this.clearFiltersVisible$ = this.store.pipe(select(fromStore.clearFilterVisible));
  }

  updateCardFilters(filters: CardFilter): void {
    this.store.dispatch(fromStore.updateCardFilters({ filters }));
  }

}
