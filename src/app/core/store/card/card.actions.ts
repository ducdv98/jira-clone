import { createAction, props } from '@ngrx/store';
import { AddCommentModel, Card, CardFilter, Column, Comment, PartialCard } from '@app/core/interfaces';

const ACTION_PREFIX = '[Cards]';

export const getCards = createAction(
  `${ACTION_PREFIX} Get cards`,
);

export const getCardsSuccess = createAction(
  `${ACTION_PREFIX} Get cards success`,
  props<{ cards: Array<Card> }>()
);

export const getCardsError = createAction(
  `${ACTION_PREFIX} Get cards error`,
  props<{ error: string }>()
);

export const updateCard = createAction(
  `${ACTION_PREFIX} Update card`,
  props<{ partial: PartialCard }>()
);

export const updateCardSuccess = createAction(
  `${ACTION_PREFIX} Update card success`,
  props<{ partial: PartialCard }>()
);

export const updateCardError = createAction(
  `${ACTION_PREFIX} Update card error`,
  props<{ error: string }>()
);

export const createCard = createAction(
  `${ACTION_PREFIX} Create card`,
  props<{ card: Card }>()
);

export const createCardSuccess = createAction(
  `${ACTION_PREFIX} Create card success`,
  props<{ card: Card }>()
);

export const createCardError = createAction(
  `${ACTION_PREFIX} Create card error`,
  props<{ error: string }>()
);

export const setSelectedCardId = createAction(
  `${ACTION_PREFIX} Set selected card`,
  props<{ id: string | null }>()
);

export const getLabels = createAction(
  `${ACTION_PREFIX} Get labels`,
);

export const getLabelsSuccess = createAction(
  `${ACTION_PREFIX} Get labels success`,
  props<{ labels: Array<string> }>()
);

export const getLabelsError = createAction(
  `${ACTION_PREFIX} Get labels error`,
  props<{ error: string }>()
);

export const getComments = createAction(
  `${ACTION_PREFIX} Get comments`,
);

export const getCommentsSuccess = createAction(
  `${ACTION_PREFIX} Get comments success`,
  props<{ comments: Array<Comment> }>()
);

export const getCommentsError = createAction(
  `${ACTION_PREFIX} Get comments error`,
  props<{ error: string }>()
);

export const addComment = createAction(
  `${ACTION_PREFIX} Add comments`,
  props<{ comment: AddCommentModel }>()
);

export const addCommentSuccess = createAction(
  `${ACTION_PREFIX} Add comment success`,
  props<{ comment: Comment }>()
);

export const addCommentError = createAction(
  `${ACTION_PREFIX} Add comment error`,
  props<{ error: string }>()
);

export const updateCardFilters = createAction(
  `${ACTION_PREFIX} Update card filters`,
  props<{ filters: CardFilter }>()
);
