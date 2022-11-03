import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuth } from '@core/model/interfaces';
import { AuthService } from '@core/services/auth.service';
import { AlertsComponent } from '../../shared/components/alerts/alerts.component';
@Component({
  selector: 'ab-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  sweetalert: AlertsComponent = new AlertsComponent

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  send() {
    const userAuth: UserAuth = {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value
    }
    this.authService.login(userAuth).subscribe(
      user => {
        this.sweetalert.SuccessAlert();
        this.router.navigate(['/dashboard']);
      },
      err => {
        this.sweetalert.ErrorAlert
      }
    )
  }
}