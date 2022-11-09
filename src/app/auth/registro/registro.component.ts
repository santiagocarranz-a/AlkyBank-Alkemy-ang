import { UserRegister } from './../../core/model/interfaces';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import {MatDialog} from '@angular/material/dialog';
import { TerminosComponent } from './components/terminos/terminos.component';
import { AlertsComponent } from '../../shared/components/alerts/alerts.component';
import * as Auth from '../auth-store/auth.actions/auth.actions';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit{


  sweetalert: AlertsComponent = new AlertsComponent
  isSubmitted = false;
  resultado:boolean = false
  user: any;


  //variables
  form: FormGroup = this.formBuilder.group({
    first_name: ['', [Validators.required]],
    last_name:['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password:['', [Validators.required]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth:AuthService,
    private store: Store<any>,
    public dialog:MatDialog) {
   }

  ngOnInit(): void {
    // this.registerForm = this.formBuilder.group({
    //   first_name: ['', [Validators.required]],
    //   last_name: ['', [Validators.required]],
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(6)]],
    // })
  }




  // //variables
  // miFormulario: FormGroup = this.formBuilder.group({
  //   first_name: ['', [Validators.required]],
  //   last_name:['', [Validators.required]],
  //   email: ['', [Validators.required, Validators.email]],
  //   password:['', [Validators.required]],
  // })


  //  register(){
  //     this.isSubmitted = true;
  //     if(this.miFormulario.invalid){
  //       return;
  //     }
  //     this.authService.registro(this.miFormulario.value)
  //     .subscribe(data => {
  //       if(data){
  //       this.router.navigate(['/auth/login'])
  //       console.log(data)
  //       } else {
  //         this.sweetalert.datosDuplicadosAlert()
  //         return
  //       }
  //     })
  //  }

  register(user: UserRegister){
    this.isSubmitted = true;
    if(this.form.invalid){
      return;
    }
    this.store.dispatch(Auth.Register({user}))
    // this.auth.registro(this.miFormulario.value)
    // .subscribe(data => {
    //   this.router.navigate(['/auth/login'])
    //   console.log(data)
    // })
 }


  // register() {
  //   this.isSubmitted = true;
  //   if (this.registerForm.valid) {
  //     this.authService.registro(this.registerForm.value)
  //     .subscribe(data => {
  //       if(data){
  //       // this.store.dispatch(Auth.Register({user}))
  //       this.router.navigate(['/auth/login'])
  //       } else {
  //         this.sweetalert.datosDuplicadosAlert()
  //         return
  //       }
  //     } , error => {
  //       console.log(error)
  //     })
  //   }
  // }

   openDialog(){
    const dialogRef = this.dialog.open(TerminosComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === true){
        this.resultado = true
        console.log(this.resultado)
      } else {
        this.sweetalert.noAceptoAlert();
        this.router.navigate([''])
      }
    });
  }
}
