import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BancoRoutingModule } from './banco-routing.module';
import { MaterialModule } from '../../material/material.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';


import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { UsuarioPerfilComponent } from './pages/usuario-perfil/usuario-perfil.component';
import { BalanceChartComponent } from './pages/balance/balance-chart/balance-chart.component';
import { ProfileComponent } from './pages/dashboard/components/profile/profile.component';
import { BankAccountComponent } from './pages/dashboard/components/bank-account/bank-account.component';
import { PieChartComponent } from './pages/dashboard/components/pie-chart/pie-chart.component';
import { LineChartComponent } from './pages/dashboard/components/line-chart/line-chart.component';
import { AddBankAccountComponent } from './pages/dashboard/components/bank-account/components/add-bank-account/add-bank-account.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { TransactionsComponent } from './pages/dashboard/components/transactions/transactions.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    UsuarioPerfilComponent,
    BalanceChartComponent,
    ProfileComponent,
    BankAccountComponent,
    PieChartComponent,
    LineChartComponent,
    AddBankAccountComponent,
    ContactsComponent,
    TransactionsComponent
  ],
  imports: [
    CommonModule,
    BancoRoutingModule,
    MaterialModule,
    MatTableModule,
    MatSortModule,
    
    MatPaginatorModule,
    NgChartsModule,
    SharedModule
  ]
})
export class BancoModule { }
