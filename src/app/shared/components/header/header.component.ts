import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@core/model/interfaces';
import { BaseServicesService } from '@core/services/base-service';
import { navbarData } from '../navigation';
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
    private activate: ActivatedRoute) {
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
    localStorage.removeItem('user')
    this.router.navigate(['auth/login']).then(() => {
      window.location.reload();
    });
  }

  showSideBar() {
    this.showSidebar = !this.showSidebar;
  }
}
