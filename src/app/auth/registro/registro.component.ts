import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { TerminosComponent } from './components/terminos/terminos.component';
import { AlertsComponent } from '../../shared/components/alerts/alerts.component';
@Component({
  selector: 'ab-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  sweetalert: AlertsComponent = new AlertsComponent

  miFormulario: FormGroup = this.fb.group({
    first_name: ['', [Validators.required, Validators.minLength(3)]],
    last_name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })
  isSubmitted = false;
  resultado: boolean = false
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    public dialog: MatDialog
  ) { }

  register() {
    this.isSubmitted = true;
    if (this.miFormulario.invalid) {
      return;
    }
    this.auth.registro(this.miFormulario.value).subscribe(
      (res) => {
        this.sweetalert.SuccessAlert
        this.router.navigate(['/dashboard'])
      },
      (err) => {
        this.sweetalert.ErrorAlert
      }
    )
  }

  openDialog() {
    const dialogRef = this.dialog.open(TerminosComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.resultado = result
      if(this.resultado == false){
        this.sweetalert.noAceptoAlert,
        this.router.navigate(['/home'])
      }
    });
  }
}
