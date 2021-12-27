import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createFeatureSelector, createReducer } from '@ngrx/store';
import { immerOn } from 'ngrx-immer/store';

import { Card } from '@app/core/interfaces';
import * as actions from './card.actions';

export interface CardState extends EntityState<Card> {
  loading: boolean;
  error: string;
}

export const cardAdapter: EntityAdapter<Card> = createEntityAdapter<Card>();

const initialCardState: CardState = cardAdapter.getInitialState({
  loading: false,
  error: ''
});

const reducer = createReducer(
  initialCardState,
  immerOn(actions.getCards, (state) => {
    state.loading = true;
  }),
  immerOn(actions.getCardsSuccess, (state, { cards }) => cardAdapter.setAll(cards, {
    ...state,
    loading: false
  })),
  immerOn(actions.getCardsError, (state, { error }) => {
    state.loading = false;
    state.error = error;
  }),
);

export const cardReducer = (state: CardState | undefined, action: Action) => reducer(state, action);

export const selectCardState = createFeatureSelector<CardState>('cards');
