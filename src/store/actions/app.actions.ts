import {createAction, props} from '@ngrx/store';

export const initializeApplication = createAction(
  '[App] AppInit'
);

export const initializeApplicationSuccess = createAction(
  '[App] AppInit Success',
  props<any>()
);

export const initializeApplicationFailure = createAction(
  '[App] AppInit Failure',
  props<{ error: string}>()
);
