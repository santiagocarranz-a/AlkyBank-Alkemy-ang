import { AccessToken } from '@core/model/interfaces';

import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../auth.actions/auth.actions';

export interface UserAuthState {
  loggedIn: boolean,
  userData: [],
  AccessToken: ''
}

const initialUserState: UserAuthState = {
  loggedIn: false,
  userData: [],
  AccessToken: '',
}

export const authReducers = createReducer (
  initialUserState,
  on(AuthActions.LogIn, initialUserState => ({...initialUserState, loggedIn: false, userData: [], AccessToken: ''})),
  on(AuthActions.LoggedIn, (initialUserState, action) => ({...initialUserState, LoggedIn:true, initialUserState: [...initialUserState.AccessToken, action.user]})),
  on(AuthActions.Logout, state => ({...state, loggedIn: false})),
  on(AuthActions.Register, state => ({...state, loggedIn: false}))
)
