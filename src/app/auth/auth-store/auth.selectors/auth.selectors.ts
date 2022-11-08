import { createFeatureSelector, createSelector } from "@ngrx/store"

export interface AuthStateInterface {
  isLoggedIn: boolean
}

export const authFeatureSelector = createFeatureSelector<AuthStateInterface>('auth')

export const isLoggedIn = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface): boolean => authState.isLoggedIn
)


