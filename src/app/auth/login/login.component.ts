import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  checked: boolean = true;
  loading: boolean = false;
  sweetalert: AlertsComponent = new AlertsComponent

  constructor(
    private store: Store<any>,
    private formBuilder: FormBuilder,
    ) { }

  // form: FormGroup = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  // });

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  login() {
    const user: UserAuth = this.loginForm.value;
    if(this.loginForm.valid) {
      this.loading = true;
      this.store.dispatch(Auth.LogIn({ user }));
    }
  }
}

