import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '@core/model/interfaces';
import { TransactionsService } from '@core/services/banco/transactions.service';
import { BaseServicesService } from '@core/services/base-service';
import { environment } from '@env/environment';
import { TransactionsComponent } from '@shared/components/formTransactions/transactions.component';


@Component({
  selector: 'ab-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
displayedColumns: string[] = ['first_name', 'email', 'enviar'];
length = 100;
pageSize = 10;
dataSource!:MatTableDataSource<User[]>

@ViewChild(MatPaginator, {static:true}) paginator!:MatPaginator


  constructor(private base:BaseServicesService, private modalS:TransactionsService, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.getUser()

  }
  getUser(){
    this.base.getUsers().subscribe((res:any)=>{
      console.log(res)
      const{data,nextPage}=res
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.paginator = this.paginator

    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}
  modalTransferir(id:number){
  console.log(id)
  this.modalS.$modal.emit(false)
  this.dialog.open(TransactionsComponent)
}
}
