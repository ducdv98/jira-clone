import { createSelector } from '@ngrx/store';

import { cardAdapter, selectCardState } from './card.reducers';
import { allUsers } from '../user/user.selectors';

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

export const cardFilters = createSelector(
  selectCardState,
  state => state.filters
);

export const allCardEntities = createSelector(
  selectCardState,
  selectCardEntities,
);

export const selectLoading = createSelector(
  selectCardState,
  state => state.loading
);

export const selectLabelLoading = createSelector(
  selectCardState,
  state => state.labelLoading
);

export const selectCommentLoading = createSelector(
  selectCardState,
  state => state.commentLoading
);

export const selectCardsLoading = createSelector(
  selectLoading,
  selectLabelLoading,
  selectCommentLoading,
  (loading, labelLoading, commentLoading) => loading && labelLoading && commentLoading
);

export const selectCardsByColumnId = (columnId: string) => createSelector(
  allCards,
  cards => cards && cards.filter(c => c.columnId === columnId),
);

export const clearFilterVisible = createSelector(
  cardFilters,
  filters => {
    if (!filters) {
      return false;
    }

    return filters.labels.length > 0 || filters.assignees.length > 0 || filters.types.length > 0;
  },
);

export const selectCardsByColumnIdWithFilters = (columnId: string) => createSelector(
  selectCardsByColumnId(columnId),
  cardFilters,
  (cards, filters) => {
    if (!cards) {
      return [];
    }
    if (!filters) {
      return cards;
    }

    const assigneesFilter = filters.assignees;
    const labelsFilter = filters.labels;
    const typesFilter = filters.types;

    return cards
      .filter(card => (assigneesFilter.length > 0) ? assigneesFilter.includes(card.assigneeId) : card)
      .filter(card => (labelsFilter.length > 0) ? card.labels.some(l => labelsFilter.includes(l)) : card)
      .filter(card => (typesFilter.length > 0) ? typesFilter.includes(card.type) : card);
  }
);


export const selectLatestOrdinalId = createSelector(
  allCards,
  cards => {
    const cloned = [...cards];
    cloned.sort((c1, c2) => c2.ordinalId - c1.ordinalId);
    return cloned[0]?.ordinalId;
  }
);

export const selectLoadingCardIds = createSelector(
  selectCardState,
  state => state.loadingCardIds
);

export const selectSelectedCardId = createSelector(
  selectCardState,
  state => state.selectedCardId
);

export const selectSelectedCard = createSelector(
  allCardEntities,
  selectSelectedCardId,
  (entities, id) => {
    if (entities && id) {
      return entities[id];
    }
    return null;
  }
);

export const allLabels = createSelector(
  selectCardState,
  state => state.labels
);

export const allComments = createSelector(
  selectCardState,
  state => state.comments
);

export const selectSelectedCardComments = createSelector(
  allComments,
  selectSelectedCardId,
  (comments, cardId) => {
    if (!comments || !cardId) {
      return [];
    }
    return comments.filter(c => c.cardId === cardId);
  }
);

export const allCommentsWithUser = createSelector(
  selectSelectedCardComments,
  allUsers,
  (comments, users) => {
    if (!comments || !users) {
      return [];
    }

    return comments.map(c => ({
      ...c,
      user: users.find(u => u.id === c.uid)
    }));
  }
);
