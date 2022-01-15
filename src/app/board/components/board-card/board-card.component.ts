import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import * as fromStore from '@app/core/store';
import { Card, User } from '@app/core/interfaces';
import { CardPriorityEnum, CardTypesEnum } from '@app/core/enums';
import { environment } from '@app/env';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss']
})
export class BoardCardComponent implements OnInit, OnChanges {
  @Input() card!: Card;
  @Input() loading: boolean = false;
  @Output() goToDetails = new EventEmitter<string>();

  assignee$!: Observable<User | null | undefined>;

  CardTypes = CardTypesEnum;
  CardPriority = CardPriorityEnum;
  environment = environment;

  contextMenuVisible: boolean = false;

  constructor(private store: Store<fromStore.AppState>) {
  }

  ngOnInit(): void {
  }

  onCardClick(): void {
    this.goToDetails.emit(this.card.id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const card = changes.card;

    if (card && card.previousValue !== card.currentValue && this.card) {
      this.assignee$ = this.store.pipe(select(fromStore.selectUserById(this.card?.assigneeId)));
    }
  }

  onContextMenuClick(): void {
    this.contextMenuVisible = false;
  }

}
