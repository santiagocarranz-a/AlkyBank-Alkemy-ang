import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBankAccountComponent } from './components/add-bank-account/add-bank-account.component';

@Component({
  selector: 'ab-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.scss']
})
export class BankAccountComponent implements OnInit {
  openTab = 1;
  hideCurrency: boolean = false;
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
  }

  showCurrencyFn() {
    this.hideCurrency = !this.hideCurrency;
  }

  addBankAccount() {
    this.dialog.open(AddBankAccountComponent);
  }
}
