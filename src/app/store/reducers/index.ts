import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { authReducer } from './auth.reducers';
import { AuthState } from '../states/auth.state';
import { userRegisterReducer } from './user-register.reducers';


export interface AppState {
  authState:AuthState,
  registrationState:AuthState
};

export const reducers: ActionReducerMap<AppState> = {
  authState:authReducer,
  registrationState:userRegisterReducer
};
export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
