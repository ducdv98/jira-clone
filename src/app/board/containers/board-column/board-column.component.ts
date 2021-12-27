import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { Card, Column } from '@app/core/interfaces';
import * as fromStore from '@app/core/store';

@Component({
  selector: 'app-board-column',
  templateUrl: './board-column.component.html',
  styleUrls: ['./board-column.component.scss']
})
export class BoardColumnComponent implements OnInit, OnChanges {
  @Input() column!: Column;

  cards$!: Observable<Array<Card>>;

  constructor(private store: Store<fromStore.AppState>) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.column && changes.column) {
      this.cards$ = this.store.pipe(select(fromStore.selectCardsByColumnId(this.column.id)));
    }
  }

}
