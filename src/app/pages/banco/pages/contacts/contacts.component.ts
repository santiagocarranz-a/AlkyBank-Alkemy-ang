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
user:User[]=[]
apibase=environment.apiBase
length = 100;
pageSize = 10;
pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent = new PageEvent;
  constructor(private base:BaseServicesService, private route:Router) { }

  ngOnInit(): void {

    this.getUser()
  }
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  getUser(){
    this.base.getUsers().subscribe((res:any)=>{
      console.log(res)
      const{data,nextPage}=res
      this.user=data,nextPage
      return console.log (data,nextPage)

    })
  }

}
