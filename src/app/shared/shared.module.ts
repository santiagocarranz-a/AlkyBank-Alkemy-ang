import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { BancoRoutingModule } from '../banco/banco-routing.module';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    AlertsComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    BancoRoutingModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent
  ]
})
export class SharedModule { }
