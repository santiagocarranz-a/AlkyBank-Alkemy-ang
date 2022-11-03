import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '@env/environment';
import { User, UserAuth } from '../model/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.apiBase;

  constructor(private http: HttpClient) {}

  login(userAuth: UserAuth): Observable<UserAuth> {
    return this.http.post<UserAuth>(`${this.baseUrl}/auth/login`, userAuth)
      .pipe(map(user => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        }
        return user;
      }))
  }

  logout() {
    localStorage.removeItem('user');
  }

  registro(user: User): Observable<UserAuth> {
    const url = `${this.baseUrl}/users`
    return this.http.post<UserAuth>(url, user)
  }
}