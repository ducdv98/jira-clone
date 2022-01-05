import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createFeatureSelector, createReducer, on } from '@ngrx/store';
import { immerOn } from 'ngrx-immer/store';

import { Card } from '@app/core/interfaces';
import * as actions from './card.actions';

export interface CardState extends EntityState<Card> {
  selectedCardId: string | null;
  loadingCardIds: Array<string>;
  labels: Array<string>;
  labelLoading: boolean;
  loading: boolean;
  error: string | null;
}

export const cardAdapter: EntityAdapter<Card> = createEntityAdapter<Card>();

const initialCardState: CardState = cardAdapter.getInitialState({
  selectedCardId: null,
  loadingCardIds: [],
  labels: [],
  labelLoading: false,
  loading: false,
  error: null,
});

const reducer = createReducer(
  initialCardState,
  immerOn(actions.getCards, (state) => {
    state.loading = true;
  }),
  on(actions.getCardsSuccess, (state, { cards }) => cardAdapter.setAll(cards, {
    ...state,
    loading: false
  })),
  immerOn(actions.getCardsError, (state, { error }) => {
    state.loading = false;
    state.error = error;
  }),

  on(actions.updateCard, (state, { partial }) => {
    const card = { ...state.entities[partial.id] };
    return cardAdapter.updateOne({
      id: partial.id,
      changes: {
        ...card,
        ...partial,
      }
    }, { ...state, loading: true });
  }),
  immerOn(actions.updateCardSuccess, (state, { partial }) => {
    state.loading = false;
  }),
  immerOn(actions.updateCardError, (state, { error }) => {
    state.loading = false;
    state.error = error;
  }),

  on(actions.createCard, (state, { card }) => {
    return cardAdapter.addOne(card, { ...state, loadingCardIds: [...state.loadingCardIds, card.id] });
  }),
  on(actions.createCardSuccess, (state, { card }) => {
    return cardAdapter.upsertOne(card, { ...state, loadingCardIds: state.loadingCardIds.filter(id => id !== card.id) });
  }),
  immerOn(actions.createCardError, (state, { error }) => {
    state.loading = false;
    state.error = error;
  }),

  immerOn(actions.setSelectedCardId, (state, { id }) => {
    state.selectedCardId = id;
  }),

  immerOn(actions.getLabels, state => {
    state.labelLoading = true;
  }),
  immerOn(actions.getLabelsSuccess, (state, { labels }) => {
    state.labelLoading = false;
    state.labels = labels;
  }),
  immerOn(actions.getLabelsError, (state, { error }) => {
    state.labelLoading = false;
    state.error = error;
  }),
);

export const cardReducer = (state: CardState | undefined, action: Action) => reducer(state, action);

export const selectCardState = createFeatureSelector<CardState>('cards');
