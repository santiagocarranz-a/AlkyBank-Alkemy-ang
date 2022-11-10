import { authReducers } from './../../auth/auth-store/auth.reducers/auth.reducers';
import { userDataReducers } from '@core/state/user-reducers/user.reducers';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

export * as UserActions from './user-actions/user.actions';
export * as UserDataAPI from './user-api-actions/user.api.actions';
export * as UserDataActions from './user-actions/user.actions';
// export * from './user-effects/user.effects';



export interface State {
  router: RouterReducerState<any>;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer
};

export const storeReducers = {
  userDataReducers,
  authReducers

}
