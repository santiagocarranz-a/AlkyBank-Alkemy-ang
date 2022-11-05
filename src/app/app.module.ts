import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { IconsModule } from '@core/icons/icons.module';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from './material/material.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { InterceptorModule } from '@core/services/interceptors/interceptor-module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    SharedModule,
    HttpClientModule,
    InterceptorModule,
    MaterialModule,
    HttpClientModule,
    IconsModule,
    InterceptorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
