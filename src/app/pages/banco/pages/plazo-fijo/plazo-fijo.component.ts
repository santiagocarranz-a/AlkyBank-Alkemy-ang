import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FixedTerms } from '@core/model/user.data';
import { BankAccountService } from '@core/services/banco/bank-account.service';
import { UserDataService } from '@core/services/user-data.service';

@Component({
  selector: 'ab-plazo-fijo',
  templateUrl: './plazo-fijo.component.html',
  styleUrls: ['./plazo-fijo.component.scss']
})
export class PlazoFijoComponent implements OnInit {
  displayedColumns: string[] = ['accountId', 'userId', 'id', 'amount', 'closing_date','creation_date', 'eliminar'];
  PlazosFijos!:FixedTerms
  plazosForm!: FormGroup;
  dataSource!:MatTableDataSource<FixedTerms[]>
  dinero:any;
  resultado:any
  plata:any

  @ViewChild(MatPaginator, {static:true}) paginator!:MatPaginator




  constructor(private plazos:UserDataService, private formBuilder: FormBuilder,
    private bankAccountService: BankAccountService) { }

  ngOnInit(): void {
    this.plazosForm = this.formBuilder.group({
      userId: ['', [Validators.required]],
      accountId: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      creation_date: ['', [Validators.required]],
      closing_date: ['', [Validators.required]]
    })

    this.plazosFijos()
    this.getPlazos()
    this.getMoneyAccount()
  }
  plazosFijos(){
    const plazos: FixedTerms = this.plazosForm.value;
    this.plazos.postFixedDeposits(plazos).subscribe(data => {
      const {amount} = data
      if(amount > this.dinero){
      } else {
        this.resultado = this.dinero - amount
      }
      this.getPlazos()
    })
  }

  getMoneyAccount() {
    this.bankAccountService.BAccountsMe().subscribe((list: any) => {
     this.dinero = list

    //  this.dinero = this.dinero[0].money
     this.dinero = this.dinero.forEach((cuenta:any) => {
      const {money, id} = cuenta
      this.plata = {money, id}
      console.log(this.plata)
     })
    })
  }

  eliminarPlazo(id:number){
    this.plazos.deleteFixedDeposits(id).subscribe(data => {
      this.getPlazos()
    })
  }

  getPlazos(){
    this.plazos.getFixedDeposits().subscribe(lista => {
      const {data} = lista
      this.dataSource = new MatTableDataSource(data)
      console.log(this.dataSource)
    })
  }

}
