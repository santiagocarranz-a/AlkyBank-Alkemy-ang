import { Component, OnInit } from '@angular/core';
import { User } from '@core/model/interfaces';
import { AuthService } from 'src/app/core/services/auth.service';
import { ChartOptions } from 'chart.js';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { BaseServicesService } from '@core/services/base-service';
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
  hideCurrency: boolean = false;
  dataUsuario:User = {
    id:0,
    first_name:'',
    last_name:'',
    email:'',
    password:'',
    points:0,
    roleId:0
  }

  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['operacion', 'monto', 'usuarioId', 'concepto', 'fecha'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: PeriodicElement | null;

  constructor(
    private authService: AuthService,
    private base:BaseServicesService
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
    this.usuario()
  }

  showCurrencyFn() {
    this.hideCurrency = !this.hideCurrency;
  }
  usuario(){
       this.base.getPerfil().subscribe(data => {
        this.dataUsuario = data
        console.log(this.dataUsuario)
       })
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
