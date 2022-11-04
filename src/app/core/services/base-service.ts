import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseServicesService {
  private baseApi = environment.apiBase


  constructor(private http: HttpClient) { }


  resetPasswordById(id: number, password: string) {
    const url = `${this.baseApi}/users/resetPassword/${id}`;
    return this.http.patch(url, { password });
  }

  // resetPassword(id:number, password:string){

  //   const url = `${this.baseApi}/users/resetPassword/${id}`
  //   const body = {password}
  //   return this.http.patch(url, body)
  // }

  // getUserId(id:number){
  //   const url = `${this.baseApi}/users/${id}`
  //   return this.http.get(url)
  // }
}
