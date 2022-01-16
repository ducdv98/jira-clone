import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '@app/core/store';
import { Card, Column } from '@app/core/interfaces';
import { Destroyable } from '@app/shared/utils';
import { environment } from '@app/env';
import { CardTypesEnum } from '@app/core/enums';

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
  CardTypes = CardTypesEnum;

  contextMenuVisible: boolean = false;

  constructor(private store: Store<fromStore.AppState>,
              private router: Router) {
  }

  ngOnInit(): void {
    this.selectedCard$ = this.store.pipe(select(fromStore.selectSelectedCard));
    this.columns$ = this.store.pipe(select(fromStore.allColumns));
  }

  onCloseModal(): void {
    this.router.navigate(['/board']);
  }

  onContextMenuClick(): void {
    this.contextMenuVisible = false;
  }
}
