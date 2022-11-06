import { Component, OnInit } from '@angular/core';
import { User } from '@core/model/interfaces';
import { BaseServicesService } from '@core/services/base-service';

@Component({
  selector: 'ab-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
user:User[]=[]
  constructor(private base:BaseServicesService) { }

  ngOnInit(): void {
    this.getUser()
  }
  getUser(){
    this.base.getUsers().subscribe((res:any)=>{
      const{data}=res
      this.user=data
      return console.log (data)
    })
  }

}
