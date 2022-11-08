import { UserRegister } from './../../../core/model/interfaces';
import { createAction, props } from '@ngrx/store';


export const LogIn = createAction (
  '[LogIn] LogIn',
  props<{email: string, password: string}>()
)

export const Register = createAction (
  '[Register] Register',
  props<{user: UserRegister}>()
)

export const Logout = createAction (
  '[Logout] Logout Success'
)

