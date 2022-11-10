
import { createSelector } from '@ngrx/store';
import { User } from '@core/model/interfaces';
import { createFeatureSelector } from '@ngrx/store';
import { UserInitialState } from '../user-reducers/userData.reducers';
import * as UserDataReducers from '../user-reducers/userData.reducers'

const UserState = createFeatureSelector<UserDataReducers.UserReducers>('UserDataFeatureKey')

export const dataUser = createSelector(
  UserState,
  (state) => state.userData
)
