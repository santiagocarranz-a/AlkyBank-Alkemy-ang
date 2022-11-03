import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthRoutingModule } from '../auth/auth-routing.module';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    AlertsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
