import { ActionReducerMap } from '@ngrx/store';

import { ColumnEffects, columnReducer, ColumnState } from './column';
import { CardEffects, cardReducer, CardState } from './card';

export interface AppState {
  columns: ColumnState;
  cards: CardState
}

export const reducers: ActionReducerMap<AppState> = {
  columns: columnReducer,
  cards: cardReducer,
};

export const effects = [
  ColumnEffects,
  CardEffects,
];
