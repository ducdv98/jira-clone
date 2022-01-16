import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { nanoid } from 'nanoid';

import { Card, Column, PartialCard } from '@app/core/interfaces';
import * as fromStore from '@app/core/store';
import { selectCardsByColumnIdWithFilters } from '@app/core/store';

@Component({
  selector: 'app-board-column',
  templateUrl: './board-column.component.html',
  styleUrls: ['./board-column.component.scss']
})
export class BoardColumnComponent implements OnInit, OnChanges {
  @Input() column!: Column;

  cards$!: Observable<Array<Card>>;
  loadingCardIds$!: Observable<Array<string>>;

  contextMenuVisible: boolean = false;

  constructor(private router: Router,
              private store: Store<fromStore.AppState>) {
  }

  ngOnInit(): void {
    this.loadingCardIds$ = this.store.pipe(select(fromStore.selectLoadingCardIds));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.column && changes.column) {
      this.cards$ = this.store.pipe(select(fromStore.selectCardsByColumnIdWithFilters(this.column.id)));
    }
  }

  onCardDropped(event: CdkDragDrop<Array<any>>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const partial: PartialCard = {
        id: event.item.data,
        columnId: event.container.id
      };

      this.store.dispatch(fromStore.updateCard({ partial }));
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

  createComponentModal(id: string): void {
    this.router.navigate(
      ['/board'],
      { queryParams: { selectedIssue: id } }
    );
  }

  onContextMenuClick(): void {
    this.contextMenuVisible = false;
  }

}
