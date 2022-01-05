import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { filter, tap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Card, Column, PartialCard, User } from '@app/core/interfaces';
import { Destroyable, takeUntilDestroyed } from '@app/shared/utils';
import * as fromStore from '@app/core/store';

@Destroyable()
@Component({
  selector: 'app-card-details-panel',
  templateUrl: './card-details-panel.component.html',
  styleUrls: ['./card-details-panel.component.scss']
})
export class CardDetailsPanelComponent implements OnInit {
  columns$!: Observable<Array<Column>>;
  selectedCard$!: Observable<Card | undefined | null>;
  users$!: Observable<Array<User>>;
  reporter$!: Observable<User | undefined | null>;
  assignee$!: Observable<User | undefined | null>;
  labels$!: Observable<Array<string>>;

  card!: Card | undefined | null;
  columns!: Array<Column>;

  columnControl: FormControl;

  constructor(private store: Store<fromStore.AppState>) {
    this.columnControl = new FormControl(null, Validators.required);
  }

  ngOnInit(): void {
    this.selectedCard$ = this.store.pipe(select(fromStore.selectSelectedCard));
    this.columns$ = this.store.pipe(select(fromStore.allColumns));
    this.users$ = this.store.pipe(select(fromStore.allUsers));
    this.labels$ = this.store.pipe(select(fromStore.allLabels));

    this.subscribeEvents();
    this.listenControls();
  }

  getColumnDropdownBackgroundColor(): string {
    const selectedColumn = this.columns?.find(c => c.id === this.columnControl.value);
    return selectedColumn?.bgButton || '#ccc';
  }

  getColumnDropdownColor(): string {
    const selectedColumn = this.columns?.find(c => c.id === this.columnControl.value);
    return selectedColumn?.color || '#000';
  }

  onUpdateCard(partial: PartialCard): void {
    this.store.dispatch(fromStore.updateCard({ partial }));
  }

  private subscribeEvents(): void {
    this.columns$.pipe(
      filter(columns => !!columns),
      takeUntilDestroyed(this),
      tap(columns => (this.columns = columns))
    ).subscribe();

    this.selectedCard$.pipe(
      filter(card => !!card),
      takeUntilDestroyed(this),
      tap(card => {
        this.card = card;
        this.columnControl.patchValue(card?.columnId, { emitEvent: false });

        this.assignee$ = this.store.pipe(select(fromStore.selectUserById(this.card?.assigneeId)));
        this.reporter$ = this.store.pipe(select(fromStore.selectUserById(this.card?.reporterId)));
      })
    ).subscribe();
  }

  private listenControls(): void {
    this.columnControl.valueChanges.pipe(
      filter(value => !!value),
      takeUntilDestroyed(this),
      tap(value => {
        const partial: PartialCard = {
          id: this.card?.id || '',
          columnId: value
        };
        this.store.dispatch(fromStore.updateCard({ partial }));
      })
    ).subscribe();
  }

}
