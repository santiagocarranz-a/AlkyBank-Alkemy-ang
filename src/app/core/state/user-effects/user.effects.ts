
import { Store } from '@ngrx/store';
import { createEffect, ofType } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { getAccounts } from "../user-actions/user.actions";
import { exhaustMap, catchError, EmptyError, map } from 'rxjs';

@Injectable()
export class AccountEffects {

}
