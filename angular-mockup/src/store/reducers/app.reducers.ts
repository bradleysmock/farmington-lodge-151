import {AppState, initialAppState} from '../state/app.state';
import {createReducer, on} from '@ngrx/store';
import * as AppActions from '../actions/app.actions';

export const AppReducers = createReducer<AppState>(
  initialAppState,

  on(AppActions.initializeApplication, (state, action) => {
    return initialAppState;
  }),

  on(AppActions.initializeApplicationSuccess, (state: AppState, appData) => {
    return {
      ...state,
      ...appData,
      loaded: true,
      error: null
    };
  }),

  on(AppActions.initializeApplicationFailure, (state: AppState, {error}) => ({
    ...state,
    loaded: true,
    error
  })),
)
