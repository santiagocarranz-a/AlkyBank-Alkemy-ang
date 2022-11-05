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
      catchError(error => of(error({ error })))
    );
    }
  )


  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {}

}

