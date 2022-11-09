import { Component, OnInit } from '@angular/core';
import { User } from '@core/model/interfaces';
import { AuthService } from 'src/app/core/services/auth.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { BaseServicesService } from '@core/services/base-service';
@Component({
  selector: 'ab-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  dataUsuario:User = {
    id:0,
    first_name:'',
    last_name:'',
    email:'',
    password:'',
    points:0,
    roleId:0
  }

  constructor(
    private authService: AuthService,
    private base:BaseServicesService
  ) { }

  
  ngOnInit(): void {
    this.usuario()
  }

  usuario(){
       this.base.getPerfil().subscribe(data => {
        this.dataUsuario = data
        console.log(this.dataUsuario)
       })
    }
    }
