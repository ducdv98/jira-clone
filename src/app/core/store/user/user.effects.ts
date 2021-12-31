import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as actions from './user.actions';

import { BoardService } from '../../services/board.service';

@Injectable()
export class UserEffects {
  getUsers$ = createEffect(() => this.actions$.pipe(
      ofType(actions.getUsers),
      mergeMap(() => this.boardService.getUsers()
        .pipe(
          map(users => actions.getUsersSuccess({ users })),
          catchError((error) => of(actions.getUsersError({ error })))
        ))
    )
  );


  constructor(
    private actions$: Actions,
    private boardService: BoardService
  ) {
  }

}
