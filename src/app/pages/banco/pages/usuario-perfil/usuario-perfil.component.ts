import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@core/model/interfaces';
import { BaseServicesService } from '@core/services/base-service';


@Component({
  selector: 'ab-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.scss'],
})
export class UsuarioPerfilComponent implements OnInit {
  dataUsuario: User = {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    points: 0,
    roleId: 0,
  };

  constructor(
    private base: BaseServicesService,
    private activate: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.base.getPerfil().subscribe((data) => {
      this.dataUsuario = data;
      console.log(this.dataUsuario);
    });
  }
}
