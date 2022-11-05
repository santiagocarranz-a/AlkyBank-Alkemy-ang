import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {switchMap} from 'rxjs/operators'
import {FormGroup, Validators, FormControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BaseServicesService } from '@core/services/base-service';

@Component({
  selector: 'ab-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  // resetPasswordForm: FormGroup = new FormGroup({});

  constructor(private base:BaseServicesService,
    private activate:ActivatedRoute) { }

  ngOnInit(): void {
}
  form: FormGroup = new FormGroup({
  userId: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required]),
  confirmPassword: new FormControl('', [Validators.required]),

});

  resetPassword(){
    if(this.form.invalid){
      return;
    } else {
      this.base.resetPasswordById(this.form.value.userId, this.form.value.password)
    }
  }

}
