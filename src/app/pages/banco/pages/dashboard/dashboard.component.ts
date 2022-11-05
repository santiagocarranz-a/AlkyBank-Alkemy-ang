import { UserRegister } from './../../../../core/model/interfaces';
import { Component, OnInit } from '@angular/core';
import { User } from '@core/model/interfaces';
import { AuthService } from 'src/app/core/services/auth.service';
import { ChartOptions } from 'chart.js';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'ab-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DashboardComponent implements OnInit {

userProfile: User | undefined;

  hideCurrency: boolean = false;
  currentUser: User = {
    first_name: 'Sebas',
    last_name: 'Prueba',
    email: 'test@test.com',
    password: '',
    roleId: 1,
    points: 5000,
  }
  completeName: string = this.currentUser.first_name + ' ' + this.currentUser.last_name;


  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['operacion', 'monto', 'usuarioId', 'concepto', 'fecha'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: PeriodicElement | null;

  constructor(
    private authService: AuthService
  ) { }

  public pieChartOptions: ChartOptions<'doughnut'> = {
    responsive: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          textAlign: 'left',
        },
      }
    }
  };

  public pieChartLabels = ['Compras','Servicios', 'Restaurantes y bares' ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile() {
    this.authService.getUsersID(262).subscribe({
      next: (response : User) => {
        this.userProfile = response;
      }
    })
  }





  showCurrencyFn() {
    this.hideCurrency = !this.hideCurrency;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

export interface TransaccionesAUsuarios {
  operacion: string;
  tipo: string;
  estado: string;
  fecha: string;
  hora: string;
  usuarioId: string;
  concepto: string;
  monto: string;
}

const ELEMENT_DATA: TransaccionesAUsuarios[] = [
  {
    operacion: 'Transferencia',
    tipo: 'Transferencia',
    estado: 'Aprobada',
    fecha: '01/11/2022',
    hora: '12:00',
    concepto: 'Transferencia a cuenta de ahorros',
    monto: '62000',
    usuarioId: '23436235'
  },
  {
    operacion: 'Transferencia',
    tipo: 'Transferencia',
    estado: 'Aprobada',
    fecha: '02/11/2022',
    hora: '12:00',
    concepto: 'Transferencia a cuenta de ahorros',
    monto: '1000',
    usuarioId: '73253'
  },
  {
    operacion: 'Transferencia',
    tipo: 'Transferencia',
    estado: 'Aprobada',
    fecha: '03/11/2022',
    hora: '12:00',
    concepto: 'Transferencia a cuenta de ahorros',
    monto: '72344',
    usuarioId: '7235234'
  }
];




