import { cardAdapter, selectCardState } from './card.reducers';
import { createSelector } from '@ngrx/store';
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

export const allCardEntities = createSelector(
  selectCardState,
  selectCardEntities,
);

export const selectCardsByColumnId = (columnId: string) => createSelector(
  allCards,
  cards => {
    return cards && cards.filter(c => c.columnId === columnId);
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
