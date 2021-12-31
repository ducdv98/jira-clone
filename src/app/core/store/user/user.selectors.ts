import { selectUserState, userAdapter } from './user.reducers';
import { createSelector } from '@ngrx/store';

const {
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectAll: selectAllUsers,
  selectTotal: selectTotalUsers,
} = userAdapter.getSelectors();

export const allUsers = createSelector(
  selectUserState,
  selectAllUsers,
);
