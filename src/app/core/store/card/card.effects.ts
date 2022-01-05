import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { select, Store } from '@ngrx/store';

import * as actions from './card.actions';

import { BoardService } from '../../services/board.service';
import { CardState } from './card.reducers';
import { selectLatestOrdinalId } from './card.selectors';

@Injectable()
export class CardEffects {
  getCards$ = createEffect(() => this.actions$.pipe(
      ofType(actions.getCards),
      mergeMap(() => this.boardService.getBoardCards()
        .pipe(
          map(cards => actions.getCardsSuccess({ cards })),
          catchError((error) => of(actions.getCardsError({ error })))
        ))
    )
  );

  createCard$ = createEffect(() => this.actions$.pipe(
      ofType(actions.createCard),
      withLatestFrom(this.store.pipe(select(selectLatestOrdinalId))),
      mergeMap(([{ card }, ordinalId]) => this.boardService.createCard(card)
        .pipe(
          map(_ => actions.createCardSuccess({ card: { ...card, ordinalId: ordinalId + 1 } })),
          catchError((error) => of(actions.createCardError({ error })))
        ))
    )
  );

  getTags$ = createEffect(() => this.actions$.pipe(
    ofType(actions.getLabels),
    mergeMap(() => this.boardService.getTags()
      .pipe(
        map(tags => actions.getLabelsSuccess({ labels: tags }),
          catchError((error) => of(actions.getLabelsError({ error })))
        )
      )
    ))
  );

  constructor(
    private actions$: Actions,
    private boardService: BoardService,
    private store: Store<CardState>
  ) {
  }

}
