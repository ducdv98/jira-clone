import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as actions from './card.actions';

import { BoardService } from '../../services/board.service';

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

  constructor(
    private actions$: Actions,
    private boardService: BoardService
  ) {
  }

}
