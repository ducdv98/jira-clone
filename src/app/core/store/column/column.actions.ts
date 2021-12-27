import { createAction, props } from '@ngrx/store';
import { Column } from '@app/core/interfaces';

const ACTION_PREFIX = '[Columns]';

export const getColumns = createAction(
  `${ACTION_PREFIX} Get columns`,
);

export const getColumnsSuccess = createAction(
  `${ACTION_PREFIX} Get columns success`,
  props<{ columns: Array<Column> }>()
);

export const getColumnsError = createAction(
  `${ACTION_PREFIX} Get columns error`,
  props<{ error: string }>()
);
