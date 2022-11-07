import { UserAuth, AccessToken } from '@core/model/interfaces';
import { Injectable } from "@angular/core";
import { AuthService } from '@core/services/auth.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { mergeMap, catchError, of, map, switchMap, tap } from 'rxjs';
import * as AuthActions from '../auth.actions/auth.actions'
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects {

  LogIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.LogIn),
      switchMap((action: any) => {
        return this.authService.login(action.email, action.password).pipe(
          map((user: UserAuth) => {
            return { type: '[LogIn] LogIn Success', payload: user};
          }),
          tap((user) => {
            return this.route.navigate(['/banco/dashboard'])
          }),
          catchError((error) => {
            return of({ type: '[LogIn] LogIn Error', payload: error})
          })
        );
      }),
    )
  })

  Logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.Logout),
      tap(() => {
        this.route.navigateByUrl('/auth/login')
        return this.authService.logout();
      })
    )
  },
  { dispatch: false }
  )


      // map((user: UserAuth) => {
      //   return { type: '[LogIn] LogIn Success', payload: user };
      // }),
      // map(user => {
      //   if (user) {
      //     localStorage.setItem('user', JSON.stringify(user));
      //   }
      //   return user;
      // }),
      // catchError((error: any) => {
      //   return of({ type: '[LogIn] LogIn Error', payload: error });
      // })


  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private route: Router
  ) {}

}

