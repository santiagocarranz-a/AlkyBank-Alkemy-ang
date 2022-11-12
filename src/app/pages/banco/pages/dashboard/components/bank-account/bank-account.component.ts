import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TransactionsService } from '@core/services/banco/transactions.service';
import { TransactionsComponent } from '@shared/components/formTransactions/transactions.component';
import { Accounts } from '@core/mock/interfaces';
import { newBankAccount, BankAccount } from '@core/model/bank-account.interface';
import { BankAccountService } from '@core/services/banco/bank-account.service';
import { formatDate } from '@angular/common';
import { UserDataService } from '@core/services/user-data.service';

@Component({
  selector: 'ab-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.scss'],
})
export class BankAccountComponent implements OnInit {
  @Input() userId!: number;
  openTab = 1;
  hideCurrency: boolean = false;
  transacciones: any;
  plazos: any;
  resultado!:number;
  ListBankAccounts: BankAccount[] = [];
  money:any

  constructor(
    public dialog: MatDialog,
    private modalSS: TransactionsService,
    private bankAccountService: BankAccountService,
    private user: UserDataService
  ) {}

  //MODAL//
  modalRecargar() {
    this.modalSS.$modal.emit(true);
    this.dialog.open(TransactionsComponent);
    this.transaccionesS();
  }

  modalTransferir() {
    this.modalSS.$modal.emit(false)
    this.dialog.open(TransactionsComponent)
  }

  ngOnInit(): void {
    this.transaccionesS();
    this.getPlazos();
  }

  getPlazos() {
    this.user.getFixedDeposits().subscribe((list: any) => {
      console.log(list);

      const { data } = list;
      this.plazos = data;
      console.log()
      this.plazos = Number(this.plazos[0].amount)
      console.log(this.plazos)

      this.resultado = this.money - this.plazos
      console.log(this.resultado)

    });
  }



  transaccionesS() {
    this.modalSS.getListTransaction().subscribe((list: any) => {
      console.log(list);
      const { data } = list;
      this.transacciones = data;
      this.transacciones = this.transacciones[0].amount;
    });
    this.getMoneyAccount()
    this.getBankAccounts()
  }

  getMoneyAccount() {
    this.bankAccountService.BAccountsMe().subscribe((list: any) => {
      console.log(list)
    })
  }

  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
  }

  showCurrencyFn() {
    this.hideCurrency = !this.hideCurrency;
  }


  addBankAccount() {
    const newAccountData: newBankAccount = {
      creationDate: formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss' , 'en'),
      money: 0,
      isBlocked: false,
      userId: this.userId
    }
    this.bankAccountService.newBAccount(newAccountData)
    console.log(newAccountData)
  }

  getBankAccounts() {
    this.bankAccountService.BAccountsMe().subscribe((data: any) => {
      this.ListBankAccounts = data
      this.money = Number(this.ListBankAccounts[0].money)
      console.log(this.money)
    })
  }


}
