import {createSelector} from '@ngrx/store';
import {AppState} from '../state/app.state';

export const getState = (state: AppState) => state;

// FIXME
export const getAppData = (state: any) => state.appData;

export const getAppText: (state: AppState) => any = createSelector(
  getAppData,
  (state: AppState) => state.appText
);

export const getAppTitle = createSelector(
  getAppText,
  (appText) => appText?.title ?? 'Loading...'
);

export const getAlert = createSelector(
  getAppData,
  (state: AppState) => state.alert
);

export const getAppMenu: (state: AppState) => any = createSelector(
  getAppData,
  (state: AppState) => state.menu
);


