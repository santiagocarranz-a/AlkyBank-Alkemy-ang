import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { navbarData } from '../navigation';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'ab-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent{
  navbarData = navbarData;
  ifLoggedIn:boolean = false
  showSidebar: boolean = false;
  constructor(private router:Router){
   this.ifLoggedIn = localStorage.getItem('user') ? true : false;
  }

  logout(){
    localStorage.removeItem('user')
    this.router.navigate(['auth/login']).then(() => {
      window.location.reload();
    });
  }

  showSideBar(){
    this.showSidebar = !this.showSidebar;
  }
}
