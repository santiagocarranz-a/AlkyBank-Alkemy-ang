import { User, UserAuth } from '@core/model/interfaces';
import { Injectable } from "@angular/core";
import { AuthService } from '@core/services/auth.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { mergeMap, catchError, of, map } from 'rxjs';



@Injectable()
export class AuthEffects {

  LogIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType('[Login] Login'),
      mergeMap((user: UserAuth) => {
        return this.authService.login(user).pipe(
          map((user: UserAuth) => {
            return { type: '[Login] Login Success', payload: user };
          }),
          catchError((error: any) => {
            return of({ type: '[Login] Login Error', payload: error });
          })
        );
      })
    )
  });

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {}

}

