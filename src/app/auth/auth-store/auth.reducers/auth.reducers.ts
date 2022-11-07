import { AccessToken } from '@core/model/interfaces';

import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../auth.actions/auth.actions';

export interface UserAuthState {
  loggedIn: boolean,
  AccessToken: ''
}

const initialUserState: UserAuthState = {
  loggedIn: false,
  AccessToken: '',
}

export const authReducers = createReducer (
  initialUserState,
  on(AuthActions.LogIn, initialUserState => ({...initialUserState, loggedIn: false})),
  on(AuthActions.LoggedIn, (initialUserState, action) => ({...initialUserState, initialUserState: [action.loggedIn = true ]})),
  on(AuthActions.Logout, initialUserState => ({...initialUserState, loggedIn : false})),
  on(AuthActions.Register, initialUserState => ({...initialUserState, loggedIn : false}))
)
