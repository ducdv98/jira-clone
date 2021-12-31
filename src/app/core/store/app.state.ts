import { ActionReducerMap } from '@ngrx/store';

import { ColumnEffects, columnReducer, ColumnState } from './column';
import { CardEffects, cardReducer, CardState } from './card';
import { UserEffects, userReducer, UserState } from './user';

export interface AppState {
  columns: ColumnState;
  cards: CardState;
  users: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  columns: columnReducer,
  cards: cardReducer,
  users: userReducer,
};

export const effects = [
  ColumnEffects,
  CardEffects,
  UserEffects,
];
