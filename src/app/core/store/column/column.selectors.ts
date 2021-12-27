import { columnAdapter, selectColumnState } from './column.reducers';
import { createSelector } from '@ngrx/store';

const {
  selectIds: selectColumnIds,
  selectEntities: selectColumnEntities,
  selectAll: selectAllColumns,
  selectTotal: selectTotalColumns,
} = columnAdapter.getSelectors();

export const allColumns = createSelector(
  selectColumnState,
  selectAllColumns,
);
