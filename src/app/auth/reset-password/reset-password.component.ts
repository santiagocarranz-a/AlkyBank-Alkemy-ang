import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControl, FormBuilder, AbstractControl} from '@angular/forms';
import { BaseServicesService } from '@core/services/base-service';
import { AlertsComponent } from '@shared/components/alerts/alerts.component';
import { passwordMatchingValidatior } from './passwordvalidator';
@Component({
  selector: 'ab-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  sweetalert: AlertsComponent = new AlertsComponent


  idUsuario!:number
  resetForm!: FormGroup;


  // resetPasswordForm: FormGroup = new FormGroup({});

  constructor(private base:BaseServicesService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.base.getPerfil().subscribe(data => {
      const {id} = data
      this.idUsuario = id
    })

    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    }, {validators: passwordMatchingValidatior})

}


get f() { return this.resetForm.controls; }

public onSubmit() {
  this.resetForm.markAllAsTouched();
  if (this.resetForm.valid) {
    console.log(this.resetForm.value);
  }
}

get confirmPassword(){
  return this.resetForm.get('confirmPassword')
}




  resetPassword(){
    const {password} = this.resetForm.value
    if(this.resetForm.valid){
      this.base.resetPasswordById(this.idUsuario, password).subscribe(data =>  {
        console.log(data)
      })
    } else  {
      this.sweetalert.ErrorAlert()

    }

  }

}
