import { createAction, props } from '@ngrx/store';
import { User } from '@app/core/interfaces';

const ACTION_PREFIX = '[Users]';

export const getUsers = createAction(
  `${ACTION_PREFIX} Get users`,
);

export const getUsersSuccess = createAction(
  `${ACTION_PREFIX} Get users success`,
  props<{ users: Array<User> }>()
);

export const getUsersError = createAction(
  `${ACTION_PREFIX} Get users error`,
  props<{ error: string }>()
);
