import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { User } from '@core/model/interfaces';
import { BaseServicesService } from '@core/services/base-service';
import { environment } from '@env/environment';


@Component({
  selector: 'ab-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  displayedColumns: string[] = ['first_name', 'email', 'enviar'];
apibase=environment.apiBase
length = 100;
pageSize = 10;
dataSource!:MatTableDataSource<User[]>

@ViewChild(MatPaginator, {static:true}) paginator!:MatPaginator

  constructor(private base:BaseServicesService) { }

  ngOnInit(): void {
    this.getUser()
  }
  getUser(){
    this.base.getUsers().subscribe((res:any)=>{
      console.log(res)
      const{data}=res
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.paginator = this.paginator
    })
  }
}
