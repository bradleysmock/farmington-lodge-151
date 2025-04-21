export interface AppState {
  alert: { isActive: boolean; message: string };
  menu: {};
  appText: object;
  loaded: boolean;
  error: any;
}

export const initialAppState: AppState = {
  appText: {},
  alert: {isActive: false, message: ''},
  menu: {},
  loaded: false,
  error: null,
}
