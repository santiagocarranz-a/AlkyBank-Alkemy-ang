import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BancoRoutingModule } from './banco-routing.module';
import { MaterialModule } from '../../material/material.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { UsuarioPerfilComponent } from './pages/usuario-perfil/usuario-perfil.component';
import { BalanceChartComponent } from './pages/balance/balance-chart/balance-chart.component';
import { ProfileComponent } from './pages/dashboard/components/profile/profile.component';
import { BankAccountComponent } from './pages/dashboard/components/bank-account/bank-account.component';
import { PieChartComponent } from './pages/dashboard/components/pie-chart/pie-chart.component';
import { LineChartComponent } from './pages/dashboard/components/line-chart/line-chart.component';
import { AddBankAccountComponent } from './pages/dashboard/components/bank-account/components/add-bank-account/add-bank-account.component';

@NgModule({
  declarations: [
    DashboardComponent,
    UsuarioPerfilComponent,
    BalanceChartComponent,
ProfileComponent,
    BankAccountComponent,
    PieChartComponent,
    LineChartComponent,
    AddBankAccountComponent
  ],
  imports: [
    CommonModule,
    BancoRoutingModule,
    MaterialModule,
    NgChartsModule,
  ]
})
export class BancoModule { }
