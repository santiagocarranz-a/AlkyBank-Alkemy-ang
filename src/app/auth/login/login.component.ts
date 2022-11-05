import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { Store } from '@ngrx/store';
import { AlertsComponent } from '../../shared/components/alerts/alerts.component';
import * as Auth from '../auth-store/auth.actions/auth.actions';

@Component({
  selector: 'ab-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  sweetalert: AlertsComponent = new AlertsComponent

  constructor(
    private router: Router,
    private authService: AuthService,
    private store: Store<any>
  ) { }

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  send() {
    const { email, password } = this.form.value
    if (email === '' || password === '') {
      this.sweetalert.ErrorAlert()
    } else {
      this.store.dispatch(Auth.LogIn())
    }
  }
}
