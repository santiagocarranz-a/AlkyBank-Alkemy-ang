import { Component, Input, OnInit } from '@angular/core';
import { TransactionsService } from '@core/services/banco/transactions.service';

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


  constructor(public modalSS:TransactionsService) { }

  obtenerFecha (){
    //FECHA//
    
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    
    if(month < 10){
      this.fecha = `${year}-0${month}-${day}`
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
  }
  
  
  
  validar(monto:any,concepto:string){
    //monto
    if(monto >0 ){
      console.log("BIEN:monto es mayor a cero")
      console.log(monto)
    }else{
      console.log("MAL:monto tiene que ser mayor a 0")
    }
    
    //concepto
    if(concepto!=""){
      console.log("BIEN:Concepto corresponde")
    }
    else{
      console.log("MAL:es necesario el concepto")
    }
  }

  ngOnInit(): void {
    this.modalSS.$modal.subscribe((valor)=>{
      console.log(valor)
      this.correspondeIngreso = valor
      console.log(this.correspondeIngreso)
    })
    this.obtenerFecha()
  }

}
