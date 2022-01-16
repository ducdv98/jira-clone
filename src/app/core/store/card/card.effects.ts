import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { catchError, filter, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { nanoid } from 'nanoid';

import * as actions from './card.actions';

import { BoardService } from '../../services/board.service';
import { CardState } from './card.reducers';
import { selectLatestOrdinalId, selectSelectedCardId } from './card.selectors';
import { Card, Comment } from '@app/core/interfaces';
import { selectCurrentUser } from '../user/user.selectors';

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
      withLatestFrom(this.store.pipe(select(selectLatestOrdinalId)), this.store.pipe(select(selectCurrentUser))),
      mergeMap(([{ card }, ordinalId, user]) => this.boardService.createCard(card)
        .pipe(
          map(_ => {
            const createdCard: Card = {
              ...card,
              ordinalId: ordinalId + 1,
              assigneeId: user.id,
              reporterId: user.id,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            };

            return actions.createCardSuccess({ card: createdCard });
          }),
          catchError((error) => of(actions.createCardError({ error })))
        ))
    )
  );

  updateCard$ = createEffect(() => this.actions$.pipe(
      ofType(actions.updateCard),
      mergeMap(({ partial }) => this.boardService.updateCard(partial)
        .pipe(
          map(_ => actions.updateCardSuccess({ partial })),
          catchError((error) => of(actions.updateCardError({ error })))
        ))
    )
  );

  getLabels$ = createEffect(() => this.actions$.pipe(
    ofType(actions.getLabels),
    mergeMap(() => this.boardService.getLabels()
      .pipe(
        map(labels => actions.getLabelsSuccess({ labels })),
        catchError((error) => of(actions.getLabelsError({ error })))
      )
    ))
  );

  getComments$ = createEffect(() => this.actions$.pipe(
    ofType(actions.getComments),
    mergeMap(_ => this.boardService.getComments()
      .pipe(
        map(comments => actions.getCommentsSuccess({ comments })),
        catchError((error) => of(actions.getCommentsError({ error })))
      )
    ))
  );

  addComment$ = createEffect(() => this.actions$.pipe(
    ofType(actions.addComment),
    withLatestFrom(this.store.pipe(select(selectSelectedCardId))),
    filter(([_, cardId]) => !!cardId),
    mergeMap(([{ comment }, cardId]) => {
        const newComment: Comment = {
          ...comment,
          id: nanoid(),
          cardId: cardId || '',
          createdAt: new Date().toISOString(),
        };

        return this.boardService.addComment(newComment)
          .pipe(
            map(_ => actions.addCommentSuccess({ comment: newComment })),
            catchError((error) => of(actions.addCommentError({ error })))
          );
      }
    ))
  );

  constructor(
    private actions$: Actions,
    private boardService: BoardService,
    private store: Store<CardState>
  ) {
  }

}
