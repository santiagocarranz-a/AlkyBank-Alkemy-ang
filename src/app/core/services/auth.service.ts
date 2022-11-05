import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from '@env/environment';
import { UserRegister, UserAuth, User } from '../model/interfaces';

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

  login(email: string, password: string): Observable<UserAuth> {
    return this.http.post<UserAuth>(`${this.baseUrl}/auth/login`, { email, password })
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

  registro(user: UserRegister) {
    const url = `${this.baseUrl}/users`;
    return this.http.post(url, user);
  }

  getUsersID(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${id}`).pipe(
      map(data => data)
    )
  }
}
