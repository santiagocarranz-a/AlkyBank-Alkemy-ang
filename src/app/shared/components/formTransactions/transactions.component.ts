import { Component, Input, OnInit } from '@angular/core';
import { TransactionsService } from '@core/services/banco/transactions.service';
import { Transactions } from '@core/model/interfacesTransactions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(public modalSS:TransactionsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.enviarDinero = this.formBuilder.group({
      monto:['', [Validators.required]],
      tipocuenta:['', [Validators.required]],
      concepto:['', [Validators.required]]
    })
  }
  sendmoney(){
    //console.log("monto: "+monto, "concepto: "+concepto, "fecha: "+this.hourAndDate)
    const {monto, tipocuenta, concepto} = this.enviarDinero.value
    const formData : Transactions = {
      amount: monto,
      concept: concepto,
      date: "2022-10-26 15:00:00",
      type: tipocuenta,
      accountId: 993,
      userId: 1599,
      to_account_id: 3
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
