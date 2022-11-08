import { createFeatureSelector, createSelector } from "@ngrx/store"

export interface AuthStateInterface {
  isLoggedIn: boolean
}

export const authFeatureSelector = createFeatureSelector<AuthStateInterface>('auth')

export const isLoggedSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface): boolean => authState.isLoggedIn
)


