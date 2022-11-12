import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '@core/model/interfaces';
import { Transactions, TransferAccount } from '@core/model/user.data';
import { TransactionsService } from '@core/services/banco/transactions.service';
import { BaseServicesService } from '@core/services/base-service';
import { UserDataService } from '@core/services/user-data.service';

@Component({
  selector: 'ab-form-end-point-transaction',
  templateUrl: './form-end-point-transaction.component.html',
  styleUrls: ['./form-end-point-transaction.component.scss']
})
export class FormEndPointTransactionComponent implements OnInit {

  Transferencias:Transactions[] = []
  enviarDinero!: FormGroup;
  correspondeIngreso:any;
  idMonto: any;
  fecha:string = ''
  hourAndDate:string=""
  UserID:number=0
  banco:any

  constructor(
    public modalSS:TransactionsService,
    private formBuilder: FormBuilder,
    private base:BaseServicesService,
    private userData:UserDataService) { }

    dataUsuario:User = {
      id:0,
      first_name: "string",
      last_name: "string",
      email: "string",
      password: "string",
      roleId: 0,
      points: 0,
      }

  ngOnInit(): void {
    this.enviarDinero = this.formBuilder.group({
      amount:['', [Validators.required]],
      type:['', [Validators.required]],
      concept:['', [Validators.required]]
    })

    this.obtenerFecha()
  }




  sendTransaction(){
    const {type, concept, amount} = this.enviarDinero.value
    const formData : TransferAccount = {
      type:type,
      concept:concept,
      amount:amount
    }
    console.log(formData)

    this.userData.postAccountsId(214, formData).subscribe(data => {
     console.log(data)
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
}
