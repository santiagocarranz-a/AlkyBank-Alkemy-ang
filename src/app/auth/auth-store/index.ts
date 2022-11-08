import { ActionReducerMap, ActionReducerMap } from '@ngrx/store';
import * as AuthActions from '../auth-store/auth.actions/auth.actions';
import * as AuthReducers from '../auth-store/auth.reducers/auth.reducers';
import * as AuthEffects from '../auth-store/auth.effects/auth.effects';
import * as AuthSelect from '../auth-store/auth.selectors/auth.selectors';

export class AuthStore: ActionReducerMap<AuthReducers.UserAuthState> = {
}
