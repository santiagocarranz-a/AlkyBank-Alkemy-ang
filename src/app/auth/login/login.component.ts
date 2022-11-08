import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { AlertsComponent } from '../../shared/components/alerts/alerts.component';
import * as Auth from '../auth-store/auth.actions/auth.actions';
import { isLoggedSelector } from '../auth-store/auth.selectors/auth.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'ab-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  sweetalert: AlertsComponent = new AlertsComponent
  isLoggedSelector$: Observable<boolean> | undefined

  constructor( private store: Store<any> ) { }

  ngOnInit(): void {
    this.initializeValues()
  }

  public initializeValues(): void {
    this.isLoggedSelector$ = this.store.pipe(select(isLoggedSelector))
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  login() {
    const { email, password } = this.loginForm.value
    if (email === '' || password === '') {
      this.sweetalert.ErrorAlert()
    } else {
      this.store.dispatch(Auth.LogIn({email, password}))
    }
  }
}
