import { Component, Input, OnInit } from '@angular/core';
import { TransactionsService } from '@core/services/banco/transactions.service';
import { Transactions } from '@core/model/interfacesTransactions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseServicesService } from '@core/services/base-service';
import { User } from '@core/model/interfaces';

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

  constructor(
    public modalSS:TransactionsService,
    private formBuilder: FormBuilder,
    private base:BaseServicesService
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
      monto:['', [Validators.required]],
      tipocuenta:['', [Validators.required]],
      concepto:['', [Validators.required]]
    })

    this.obtenerFecha()
    this.base.getPerfil().subscribe(data=>{
      this.dataUsuario = data
      console.log(this.dataUsuario)
    })
  }
  sendmoney(){
    //console.log("monto: "+monto, "concepto: "+concepto, "fecha: "+this.hourAndDate)
    const {monto, tipocuenta, concepto} = this.enviarDinero.value
    const formData : Transactions = {
      amount: monto,
      concept: concepto,
      date: this.hourAndDate,
      type: "payment",
      accountId: 993,
      userId: this.dataUsuario.id,
      to_account_id: 1 // la constante "tipocuenta" devuelve un string "one" y to_account_id espera un number 
    }

    this.modalSS.postTransaction(formData).subscribe((data)=>{
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
