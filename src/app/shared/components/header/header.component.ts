import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@core/model/interfaces';
import { BaseServicesService } from '@core/services/base-service';
import { navbarData } from '../navigation';
import { select, Store } from '@ngrx/store';
import * as Auth from '../../../auth/auth-store/auth.actions/auth.actions';
import { Observable } from 'rxjs';
import { isLoggedIn } from 'src/app/auth/auth-store/auth.selectors/auth.selectors';

@Component({
  selector: 'ab-header',
  templateUrl: './header.component.html'
})


export class HeaderComponent implements OnInit {
  navbarData = navbarData;
  isLoggedIn: boolean = false
  showSidebar: boolean = false;
  dataUsuario!: User;
  fullName!: string[]
  isLoggedIn$!: Observable<boolean>;

  ngOnInit(): void {
    this.usuario()
    this.initializeValues()
  }

public initializeValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedIn))
  }

  constructor(private router: Router,
    private base: BaseServicesService,
    private activate: ActivatedRoute,
    private store: Store<any>) {

    this.dataUsuario = { id: 0, first_name: '', last_name: '', email: '', password: '', roleId: 0, points: 0 }
  }

  usuario() {
    if (this.isLoggedIn) {
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
