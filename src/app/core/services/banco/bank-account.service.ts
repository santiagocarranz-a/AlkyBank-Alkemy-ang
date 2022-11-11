import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { newBankAccount, BankAccount } from '@core/model/bank-account.interface';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  apiUrl = environment.apiBase;
  constructor(
    private http: HttpClient
  ) { }

  newBAccount(account: newBankAccount) {
    return this.http.post(`${this.apiUrl}/accounts`, account)
  }

  BAccountsMe (): Observable<BankAccount[]> {
    return this.http.get<BankAccount[]>(`${this.apiUrl}/accounts/me`)
  }
}
