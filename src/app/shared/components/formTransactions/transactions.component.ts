import { Component, Input, OnInit } from '@angular/core';
import { TransactionsService } from '@core/services/banco/transactions.service';
import { Transactions } from '@core/model/interfacesTransactions';
import { BaseServicesService } from '@core/services/base-service';
import { User } from '@core/model/interfaces';

@Component({
  selector: 'ab-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  @Input() tittle:string = ""

  correspondeIngreso:any;
  idMonto: any;
  fecha:string = ''
  hourAndDate:string=""
  UserID:number=0

  constructor(public modalSS:TransactionsService,
    private base:BaseServicesService) 
    { }

    dataUsuario:User = {
      id:0,
      first_name:'',
      last_name:'',
      email:'',
      password:'',
      points:0,
      roleId:0
    }


  sendDataForm(monto:any,concepto:string){

    
    const formData : Transactions = {
      amount: monto,
      concept: concepto,
      date: this.hourAndDate,
      type: 'payment',
      accountId: 23,
      userId: this.dataUsuario.id,
      to_account_id: 5
    }

    this.modalSS.postTransaction(formData).subscribe((data)=>{
    })
  }
  

  obtenerFecha (){
    //FECHA//
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    
    if(month < 10 && day < 10){
      this.fecha = `${year}-0${month}-0${day}`
      console.log(this.fecha)
    }else{
      this.fecha = `${year}-${month}-${day}`
      console.log(this.fecha)
    }
    //HORA//
    let timeHour = date.getHours()
    let timeMinutes = date.getMinutes().toString()
    let timeSecond = date.getSeconds().toString()
    let clockSet
    
    if(timeHour.toString().length<2){
      let timeHourString = timeHour.toString()
      timeHourString = "0" + timeHourString
      clockSet = `${timeHourString}:${timeMinutes}:${timeSecond}` 
    }else{
      clockSet = `${timeHour}:${timeMinutes}:${timeSecond}` 
    }
    console.log(clockSet)

    this.hourAndDate = this.fecha +" "+ clockSet
    console.log(this.hourAndDate)
  }


  ngOnInit(): void {
  /*
    this.modalSS.$modal.subscribe((valor)=>{
      console.log(valor)
      this.correspondeIngreso = valor
      console.log(this.correspondeIngreso)
    })
  */
    this.obtenerFecha()
    
    this.base.getPerfil().subscribe(data => {
      this.dataUsuario = data
      console.log(this.dataUsuario)
     })
  }

}
