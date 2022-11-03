import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';



@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authSVC: AuthService) {}

  intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      const currentUser = this.authSVC.userAuth;
      const isAuthenticated = currentUser && currentUser.user;

      if(isAuthenticated) {
        req = req.clone({
          setHeaders: {
            Autorization: `Bearer ${currentUser.user}`
          }
        });
      }
      console.log(currentUser);
      return next.handle(req);
  }

}
