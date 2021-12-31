import { environment } from '@app/env';

export const logger = (reducer: any) => (state: any, action: any): any => {
  const currentState = reducer(state, action);
  console.groupCollapsed(`%c ${action.type}`, 'text-transform: uppercase');
  console.log('previous state: ', state);
  console.log('action: ', action);
  console.log('current state: ', currentState);
  console.groupEnd();

  return currentState;
};

export * from './app.state';
export * from './column';
export * from './card';
export * from './user';

export const metaReducers = environment.production ? [] : [logger];
