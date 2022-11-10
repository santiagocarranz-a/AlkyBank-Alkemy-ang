import { Transactions } from './../../model/user.data';


import { UserDataService } from './../../services/user-data.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as Transaction from '../user-actions/transactions.actions';
import { concatMap, map, catchError, switchMap } from 'rxjs';


@Injectable()
export class TransactionsEffects {

  allTransaction$ = createEffect (() => {
    return this.action$.pipe(
      ofType(Transaction.allTransaction),
      switchMap((action: any) => {
        return this.dataService.getTransactions(action.allTransaction).pipe(
          map((addTransaction: Transactions) => {
            return console.log(addTransaction)
          })
        )
      })
    )
  },
  {dispatch: false})

  constructor(private action$: Actions, private dataService: UserDataService) {}

}
