import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsuarioPerfilComponent } from './pages/usuario-perfil/usuario-perfil.component';

const routes: Routes = [

      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'perfil',
        component:UsuarioPerfilComponent
      }
    ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BancoRoutingModule { }
