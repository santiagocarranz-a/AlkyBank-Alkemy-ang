import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { UserAuth } from '@core/model/interfaces';
import { AuthService } from '@core/services/auth.service';
import { AlertsComponent } from '../../shared/components/alerts/alerts.component';
import * as Auth from '../auth-store/auth.actions/auth.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'ab-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  sweetalert: AlertsComponent = new AlertsComponent

  constructor( private store: Store<any> ) { }

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  login() {
    const { email, password } = this.form.value
    if (email === '' || password === '') {
      this.sweetalert.ErrorAlert()
    } else {
      this.store.dispatch(Auth.LogIn({email, password}))
    }
  }
}

// export class LoginComponent implements OnInit {

//   sweetalert: AlertsComponent = new AlertsComponent
//   isLoggedSelector$: Observable<boolean> | undefined

//   constructor(
//     private store: Store<any>
//   ) { }


//   form: FormGroup = new FormGroup({
//     email: new FormControl('', [Validators.required, Validators.email]),
//     password: new FormControl('', [Validators.required, Validators.minLength(6)]),
//   });

//   send() {
//     const { email, password } = this.form.value
//     if (email === '' || password === '') {
//       this.sweetalert.ErrorAlert()
//     } else {
//       this.store.dispatch(Auth.LogIn({email, password}))
//   ngOnInit(): void {
//     this.loginForm = this.formBuilder.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//     });
//   }

//   login() {
//     if (this.loginForm.valid) {
//       const user: UserAuth = this.loginForm.value
//       this.authService.login(user).subscribe(data => {
//         this.router.navigate(['banco/dashboard']).then(() => {
//           window.location.reload();
//         });
//       }, error => {
//         this.sweetalert.ErrorAlert()
//       });
//     }
//   }
// }


