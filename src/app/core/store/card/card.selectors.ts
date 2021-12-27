import { cardAdapter, selectCardState } from './card.reducers';
import { createSelector } from '@ngrx/store';

const {
  selectIds: selectCardIds,
  selectEntities: selectCardEntities,
  selectAll: selectAllCards,
  selectTotal: selectTotalCards,
} = cardAdapter.getSelectors();

export const allCards = createSelector(
  selectCardState,
  selectAllCards,
);

export const selectCardsByColumnId = (columnId: string) => createSelector(
  allCards,
  cards => {
    return cards && cards.filter(c => c.columnId === columnId);
  }
);
