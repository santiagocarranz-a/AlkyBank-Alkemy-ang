import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  saveToken(token:string){
    localStorage.setItem('user', token)
  }

  getToken(){
    
    if(localStorage.getItem("user") !== null){
     const {accessToken} = JSON.parse(localStorage.getItem("user") as string)
     return accessToken
   }
  }


  removeToken(){
    localStorage.removeItem('user')
  }
}
