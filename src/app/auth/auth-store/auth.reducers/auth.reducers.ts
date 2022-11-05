import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../auth.actions/auth.actions';

export interface UserAuthState {
  type: boolean,
  email: '',
  token: Array<any>,
  error: string,
}

const initialUserState: UserAuthState = {
  type: false,
  email: '',
  token: [],
  error: '',
}

export const authReducers = createReducer (
  initialUserState,
  on(AuthActions.LogIn, state => ({...state, type: true, user: '', token: []})),
  on(AuthActions.Logout, state => ({...state, type: false})),
  on(AuthActions.Register, state => ({...state, type: false}))
)
