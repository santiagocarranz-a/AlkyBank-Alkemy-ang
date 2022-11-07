import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../auth.actions/auth.actions';


export const UserAuthStateKey = 'UserAuthState';
export interface UserAuthState {
  loggedIn: boolean,
}

export const initialUserState: UserAuthState = {
  loggedIn: false,
}

export const authReducers = createReducer (
  initialUserState,
  on(AuthActions.LogIn, initialUserState => ({...initialUserState, loggedIn: true})),
  on(AuthActions.Logout, initialUserState => ({...initialUserState, loggedIn: false})),
  on(AuthActions.Register, initialUserState => ({...initialUserState, loggedIn: false}))
)
