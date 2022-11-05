import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './components/alerts/alerts.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TituloComponent } from './components/titulo/titulo.component';

@NgModule({
  declarations: [
    AlertsComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    TituloComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TituloComponent
  ]
})
export class SharedModule { }
