import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { Accounts,
         Transactions,
         TransferAccount
       } from '@core/model/user.data';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private baseUrl = environment.apiBase;

  constructor(private http: HttpClient) { }

  // Accounts

  postAccounts(CreateAccounts: Accounts): Observable<Accounts> {
    const url = `${this.baseUrl}/accounts`
    return this.http.post<Accounts>(url, CreateAccounts)
  }

  getAccounts(): Observable<Accounts> {
    const url = `${this.baseUrl}/accounts`
    return this.http.get<Accounts>(url)
  }

  postAccountsId(id: number): Observable<TransferAccount> {
    const url = `${this.baseUrl}/accounts/${id}`
    return this.http.post<TransferAccount>(url, {id})
  }

  getAccountsId(id: number): Observable<Accounts> {
    const url = `${this.baseUrl}/accounts/${id}`
    return this.http.get<Accounts>(url)
  }

  putAccounts(id: number): Observable<Accounts> {
    const url = `${this.baseUrl}/accounts/${id}`
    return this.http.put<Accounts>(url, {id})
  }

  deleteAccounts(id: number): Observable<any> {
    const url = `${this.baseUrl}/accounts/${id}`
    return this.http.delete<any>(url)
  }

  //Transaction

  postTransactions(Transactions: Transactions): Observable<Transactions> {
    const url = `${this.baseUrl}/transactions`
    return this.http.post<Transactions>(url, Transactions)
  }

  getTransactions(): Observable<Transactions> {
    const url = `${this.baseUrl}/transactions`
    return this.http.get<Transactions>(url)
  }

  getTransactionsId(id: number): Observable<Transactions> {
    const url = `${this.baseUrl}/transactions/${id}`
    return this.http.get<Transactions>(url)
  }

  putTransactions(id: number): Observable<Transactions> {
    const url = `${this.baseUrl}/transactions/${id}`
    return this.http.put<Transactions>(url, {id})
  }

  deleteTransactions(id: number): Observable<Transactions> {
    const url = `${this.baseUrl}/transactions/${id}`
    return this.http.delete<Transactions>(url)
  }

  //Fixed Terms Deposit

  postFixedDeposits(): Observable<any> {
    const url = `${this.baseUrl}/fixedDeposits`
    return this.http.post<Transactions>(url)
  }

  getFixedDeposits(): Observable<any> {
    const url = `${this.baseUrl}/]fixedDeposits`
    return this.http.get<any>(url)
  }

  getFixedDepositsId(id: number): Observable<any> {
    const url = `${this.baseUrl}/fixedDeposits/${id}`
    return this.http.get<any>(url)
  }

  putFixedDeposits(id: number): Observable<any> {
    const url = `${this.baseUrl}/fixedDeposits/${id}`
    return this.http.put<any>(url, putFixedDeposits)
  }

  deleteFixedDeposits(id: number): Observable<any> {
    const url = `${this.baseUrl}/fixedDeposits/${id}`
    return this.http.delete<any>(url)
  }

}
