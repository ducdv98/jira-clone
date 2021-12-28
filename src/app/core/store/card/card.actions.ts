import { createAction, props } from '@ngrx/store';
import { Card, Column } from '@app/core/interfaces';

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

export const updateCardColumn = createAction(
  `${ACTION_PREFIX} Update card column`,
  props<{ cardId: string; columnId: string }>()
);

export const updateCardColumnSuccess = createAction(
  `${ACTION_PREFIX} Update card column success`,
  props<{ cardId: string; columnId: string }>()
);

export const updateCardColumnError = createAction(
  `${ACTION_PREFIX} Update card column error`,
  props<{ error: string }>()
);
