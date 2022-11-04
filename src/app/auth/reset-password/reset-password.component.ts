import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ab-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.resetPasswordForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });

  }

  get email(){
    return this.resetPasswordForm.get('email');
  }

  get password(){
    return this.resetPasswordForm.get('password');
  }

  get confirmPassword(){
    return this.resetPasswordForm.get('confirmPassword');
  }

  submitResetPassword(){
    if(this.resetPasswordForm.valid){
      console.table(this.resetPasswordForm)
      this.resetPasswordForm.reset();
    }
  };


}