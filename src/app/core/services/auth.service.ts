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

  login(email:string, password:string): Observable<UserAuth> {
    return this.http.post<UserAuth>(`${this.baseUrl}/auth/login`, {email, password})
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

  registro(
    first_name: string,
    last_name: string,
    email: string,
    password: string)
    {
    const url = `${this.baseUrl}/users`;
    const body = { first_name, last_name, email, password };
    return this.http.post(url, body)
  }
}
