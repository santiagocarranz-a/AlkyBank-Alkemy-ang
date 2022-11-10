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
  newAccountData!: newBankAccount;
  Accounts:Accounts[] = [
    {
    creationDate: '2022-06-20',
    money: 1300,
    isBlocked: false,
    userId: 993,
    }
  ]
  constructor(
    public dialog: MatDialog,
    private modalSS: TransactionsService,
    private bankAccountService: BankAccountService
  ) { }


  //MODAL//
  modalRecargar(){
    this.modalSS.$modal.emit(true)
    this.dialog.open(TransactionsComponent)
  }

  modalTransferir(){
    this.modalSS.$modal.emit(false)
    this.dialog.open(TransactionsComponent)
  }



  ngOnInit(): void {
  }

  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
  }

  showCurrencyFn() {
    this.hideCurrency = !this.hideCurrency;
  }

  addBankAccount() {
    this.newAccountData = {
      creationDate: formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en'),
      money: 0,
      isBlocked: false,
      userId: this.userId
    }
    this.bankAccountService.newBAccount(this.newAccountData)
  }
}
