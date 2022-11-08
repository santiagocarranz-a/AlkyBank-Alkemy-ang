import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../auth.actions/auth.actions';


export const UserAuthStateKey = 'UserAuthState';
export interface UserAuthState {
  isLoggedIn: boolean,
}

export const initialUserState: UserAuthState = {
  isLoggedIn: false,
}

export const authReducers = createReducer (
  initialUserState,
  on(AuthActions.LogIn, initialUserState => ({...initialUserState, isLoggedIn: true})),
  on(AuthActions.Logout, initialUserState => ({...initialUserState, isLoggedIn: false})),
  on(AuthActions.Register, initialUserState => ({...initialUserState, isLoggedIn: false}))
)

export const getAuthenticationToken = (state: UserAuthState) => state.isLoggedIn;

