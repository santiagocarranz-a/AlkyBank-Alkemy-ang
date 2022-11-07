import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import {MatDialog} from '@angular/material/dialog';
import { TerminosComponent } from './components/terminos/terminos.component';
import { AlertsComponent } from '../../shared/components/alerts/alerts.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  sweetalert: AlertsComponent = new AlertsComponent


  //variables
  miFormulario: FormGroup = this.fb.group({
    first_name: ['', [Validators.required]],
    last_name:['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password:['', [Validators.required]],
  })
  isSubmitted = false;
  resultado:boolean = false
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService:AuthService,
    public dialog:MatDialog) {
   }


   register(){
      this.isSubmitted = true;
      if(this.miFormulario.invalid){
        return;
      }
      this.authService.registro(this.miFormulario.value)
      .subscribe(data => {
        if(data){
        this.router.navigate(['/auth/login'])
        console.log(data)
        } else {
          this.sweetalert.datosDuplicadosAlert()
          return
        }
      })
   }


   openDialog(){
    const dialogRef = this.dialog.open(TerminosComponent);

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
