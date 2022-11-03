import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from '@env/environment';
import { User, UserAuth } from '../model/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private baseUrl = environment.apiBase;
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('user') || '{}')
    )
  }

  login(userAuth: UserAuth): Observable<UserAuth> {
    return this.http.post<UserAuth>(`${this.baseUrl}/auth/login`, userAuth)
      .pipe(map(user => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        }
        return user;
      }))
  }

  get userAuth() {
    return this.currentUserSubject.value;
  }

  loggedIn() {
    return localStorage.getItem('user');
  }

  logout() {
    localStorage.removeItem('user');
  }

  registro(user: User): Observable<UserAuth> {
    const url = `${this.baseUrl}/users`
    return this.http.post<UserAuth>(url, user)
  }
}
