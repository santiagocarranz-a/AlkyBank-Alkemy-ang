import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TransactionsService } from '@core/services/banco/transactions.service';
import { TransactionsComponent } from '@shared/components/formTransactions/transactions.component';
import { Accounts } from '@core/mock/interfaces';
import { newBankAccount } from '@core/model/bank-account.interface';
import { BankAccountService } from '@core/services/banco/bank-account.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'ab-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.scss']
})
export class BankAccountComponent implements OnInit {
  @Input() userId!: number;
  openTab = 1;
  hideCurrency: boolean = false;
  newAccountData: newBankAccount[] = [];
  transacciones:any

  constructor(
    public dialog: MatDialog,
    private modalSS: TransactionsService,
    private bankAccountService: BankAccountService
  ) { }


  //MODAL//
  modalRecargar(){
    this.modalSS.$modal.emit(true)
    this.dialog.open(TransactionsComponent)
    this.transaccionesS()
  }

  modalTransferir(){
    this.modalSS.$modal.emit(false)
    this.dialog.open(TransactionsComponent)
  }



  ngOnInit(): void {
    this.transaccionesS()
  }

  transaccionesS(){
    this.modalSS.getListTransaction().subscribe((list:any) => {

      const {data} = list
      this.transacciones = data
      this.transacciones =this.transacciones[0].amount
      console.log(this.transacciones)

    })
  }

  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
  }

  showCurrencyFn() {
    this.hideCurrency = !this.hideCurrency;
  }

  addBankAccount() {
    this.newAccountData = [ {
      creationDate: formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en'),
      money: 0,
      isBlocked: false,
      userId: this.userId
    }
    ]
    this.bankAccountService.newBAccount(this.newAccountData)
    console.log(this.newAccountData)
  }
}
