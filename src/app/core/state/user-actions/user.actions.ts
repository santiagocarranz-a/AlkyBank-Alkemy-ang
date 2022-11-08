import { Accounts } from '@core/model/user.data';
import { createAction, props } from '@ngrx/store';

export const getAccounts = createAction('[Account] Get Account Success');

export const getAccountSuccess = createAction(
  '[Movie] Get movie success',
  // (account: ReadonlyArray<Accounts>) => ({ account })
  props<{ account: ReadonlyArray<Accounts> }>()
);
