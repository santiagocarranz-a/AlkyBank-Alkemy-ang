import { createSelector } from '@ngrx/store';
import { User } from '@core/model/interfaces';
import { createFeatureSelector } from '@ngrx/store';
import { UserInitialState } from '../user-reducers/userData.reducers';

const UserState = createFeatureSelector<User>('UserDataFeatureKey')

export const dataUser = createSelector(
  UserState,
  (UserState) => UserInitialState.userData
)
