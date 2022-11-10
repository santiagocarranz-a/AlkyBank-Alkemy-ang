import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionsService } from '@core/services/banco/transactions.service';


export interface PeriodicElement {
  operacion: string
  destinatario: number;
  monto:number;
  concepto:string;
  fecha:string
  estado:string
}


@Component({
  selector: 'ab-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TransactionsComponent implements OnInit {

  listUsuarios: PeriodicElement[] = [
    {operacion:"Transacción",
     destinatario:903, 
     monto:1000, 
     concepto:"Cuota del curso",
     fecha:"10/11/2022",estado:"Aprobado"
    },
    {operacion:"Transacción",
     destinatario:564,
      monto:3150,
      concepto:"Cuota del curso",
      fecha:"05/11/2022",
      estado:"aprobado"},
  ];

  listTransaction:any
  displayedColumns: string[] = [ 'operacion','destinatario','monto','concepto','fecha','estado','accion'];
  dataSource = new MatTableDataSource(this.listUsuarios);

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

  constructor(public ssTransaction:TransactionsService) { }

  ngOnInit(): void {
    this.toListTransaction()
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  toListTransaction(){
    this.ssTransaction.getListTransaction().subscribe((list:any)=>{
    
    const {data} = list
    this.listTransaction=data
    console.log(this.listTransaction)
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


