import { UserAuth } from '@core/model/interfaces';
import { Injectable } from "@angular/core";
import { AuthService } from '@core/services/auth.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { mergeMap, catchError, of, map } from 'rxjs';



@Injectable()
export class AuthEffects {

  LogIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType('[LogIn] LogIn'),
      mergeMap((action: any) => {
        return this.authService.login(action.email, action.password).pipe(
          map((user: UserAuth) => {
            return { type: '[LogIn] LogIn Success', payload: user };
          }),
          catchError((error: any) => {
            return of({ type: '[LogIn] LogIn Error', payload: error });
          })
        );
      }),
    )
  } )



  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {}

}

