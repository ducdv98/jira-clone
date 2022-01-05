import { Component, Input, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '@app/core/store';
import { Card, Column, PartialCard } from '@app/core/interfaces';
import { Destroyable } from '@app/shared/utils';
import { environment } from '@app/env';
import { Router } from '@angular/router';

@Destroyable()
@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  columns$!: Observable<Array<Column>>;
  selectedCard$!: Observable<Card | undefined | null>;

  environment = environment;

  constructor(private store: Store<fromStore.AppState>,
              private router: Router) {
  }

  ngOnInit(): void {
    this.selectedCard$ = this.store.pipe(select(fromStore.selectSelectedCard));
    this.columns$ = this.store.pipe(select(fromStore.allColumns));
  }

  onUpdateCard(partial: PartialCard): void {
    this.store.dispatch(fromStore.updateCard({ partial }));
  }

  onCloseModal(): void {
    this.router.navigate(['/board']);
  }
}
