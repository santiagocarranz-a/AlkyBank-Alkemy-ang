import { AuthService } from '@core/services/auth.service';
import { JsonPipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@core/model/interfaces';
import { BaseServicesService } from '@core/services/base-service';
import { navbarData } from '../navigation';
import { Store } from '@ngrx/store';
import * as Auth from '../../../auth/auth-store/auth.actions/auth.actions';
@Component({
  selector: 'ab-header',
  templateUrl: './header.component.html'
})


export class HeaderComponent implements OnInit {
  navbarData = navbarData;
  ifLoggedIn: boolean = false
  showSidebar: boolean = false;
  dataUsuario!: User;
  fullName!: string[]

  ngOnInit(): void {
    this.usuario()
  }

  constructor(private router: Router,
    private base: BaseServicesService,
    private activate: ActivatedRoute,
    private store: Store<any>) {
    this.ifLoggedIn = localStorage.getItem('user') ? true : false;
    this.dataUsuario = { id: 0, first_name: '', last_name: '', email: '', password: '', roleId: 0, points: 0 }
  }

  usuario() {
    if (this.ifLoggedIn) {
      this.base.getPerfil().subscribe(data => {
        this.dataUsuario = data
      })
    }
  }

  logout() {
    this.store.dispatch(Auth.Logout())
    // localStorage.removeItem('user')
    // this.router.navigate(['auth/login']).then(() => {
    //   window.location.reload();
    // });
  }

  showSideBar() {
    this.showSidebar = !this.showSidebar;
  }

}
