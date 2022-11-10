import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionsService } from '@core/services/banco/transactions.service';


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

  displayedColumns: string[] = [ 'type','accountId','amount','concept','date','accion'];
  dataSource :any = []

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public ssTransaction:TransactionsService) { }

  ngOnInit(): void {
    this.toListTransaction()
  }


  toListTransaction(){
    this.ssTransaction.getListTransaction().subscribe((list:any)=>{

    const {data} = list
    let dataArreglo

//    console.log(data)
/*
    for(let item of data){
      dataArreglo = item.date.slice(0,-5)
      console.log(dataArreglo)
    }
*/
    this.dataSource = new MatTableDataSource(data)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
