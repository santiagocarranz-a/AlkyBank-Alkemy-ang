import { Component, Input, OnInit } from '@angular/core';
import { TransactionsService } from '@core/services/banco/transactions.service';
import { Transactions } from '@core/model/interfacesTransactions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseServicesService } from '@core/services/base-service';
import { User } from '@core/model/interfaces';
import { UserDataService } from '@core/services/user-data.service';
import { BankAccountService } from '@core/services/banco/bank-account.service';
import { Accounts, TransferAccount } from '@core/model/user.data';

@Component({
  selector: 'ab-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  Transferencias:Transactions[] = []
  enviarDinero!: FormGroup;


  @Input() tittle:string = ""

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
    private bankAccountService: BankAccountService,
    private userData:UserDataService
    ) { }

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
    this.getAccount()

  }

  getAccount(){
    this.bankAccountService.BAccountsMe().subscribe(data =>{
      this.banco = data
      console.log(this.banco)
    })
  }
  sendmoney(){
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



  // ngOnInit(): void {
  //   this.modalSS.$modal.subscribe((valor)=>{
  //     console.log(valor)
  //     this.correspondeIngreso = valor
  //     console.log(this.correspondeIngreso)
  //   })
  //   this.obtenerFecha()
  // }

}
