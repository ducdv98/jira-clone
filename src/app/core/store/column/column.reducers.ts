import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createFeatureSelector, createReducer, on } from '@ngrx/store';
import { immerOn } from 'ngrx-immer/store';

import { Column } from '@app/core/interfaces';
import * as actions from './column.actions';

export interface ColumnState extends EntityState<Column> {
  loading: boolean;
  error: string;
}

export const columnAdapter: EntityAdapter<Column> = createEntityAdapter<Column>();

const initialColumnState: ColumnState = columnAdapter.getInitialState({
  loading: false,
  error: ''
});

const reducer = createReducer(
  initialColumnState,
  immerOn(actions.getColumns, (state) => {
    state.loading = true;
  }),
  immerOn(actions.getColumnsSuccess, (state, { columns }) => columnAdapter.setAll(columns, {
    ...state,
    loading: false
  })),
  immerOn(actions.getColumnsError, (state, { error }) => {
    state.loading = false;
    state.error = error;
  }),
);

export const columnReducer = (state: ColumnState | undefined, action: Action) => reducer(state, action);

export const selectColumnState = createFeatureSelector<ColumnState>('columns');
