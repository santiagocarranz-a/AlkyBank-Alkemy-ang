import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuth } from '@core/model/interfaces';
import { AuthService } from '@core/services/auth.service';
import { AlertsComponent } from '../../shared/components/alerts/alerts.component';
@Component({
  selector: 'ab-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  sweetalert: AlertsComponent = new AlertsComponent
  loginForm!: FormGroup;
  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.sweetalert.ErrorAlert()
    } else {
      const user: UserAuth = this.loginForm.value
      this.authService.login(user).subscribe(data => {
        this.router.navigate(['banco/dashboard']).then(() => {
          window.location.reload();
        });
      })
    }
  }
}
