import { createAction, props } from '@ngrx/store';


export const LogIn = createAction (
  '[LogIn] LogIn',
  props<{email: string, password: string}>
)

export const Register = createAction (
  '[Register] Register',
  props<{first_name: string, last_name: string, email: string, password: string}>
)

export const Logout = createAction (
  '[Logout] Logout',
  props<{isLogin: boolean}>
)

