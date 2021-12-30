import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { nanoid } from 'nanoid';

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
  loadingCardIds$!: Observable<Array<string>>;

  constructor(private store: Store<fromStore.AppState>) {
  }

  ngOnInit(): void {
    this.loadingCardIds$ = this.store.pipe(select(fromStore.selectLoadingCardIds));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.column && changes.column) {
      this.cards$ = this.store.pipe(select(fromStore.selectCardsByColumnId(this.column.id)));
    }
  }

  onCardDropped(event: CdkDragDrop<Array<any>>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.store.dispatch(fromStore.updateCardColumn({
        cardId: event.item.data,
        columnId: event.container.id
      }));
    }
  }

  onCreateCard(card: Card): void {
    const newCard: Card = {
      ...card,
      columnId: this.column.id,
      id: nanoid()
    };

    this.store.dispatch(fromStore.createCard({ card: newCard }));
  }

}
