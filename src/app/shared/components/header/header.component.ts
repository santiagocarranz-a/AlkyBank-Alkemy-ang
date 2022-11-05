import { AuthService } from '@core/services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@core/model/interfaces';
import { navbarData } from '../navigation';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'ab-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{

  navbarData = navbarData;
  ifLoggedIn:boolean = false
  showSidebar: boolean = false;
  userProfile: User | undefined;

  constructor(
    private router:Router,
    private authService: AuthService
    ){
   this.ifLoggedIn = localStorage.getItem('user') ? true : false;
  }

  ngOnInit(): void {
    this.getUserProfile();
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

  getUserProfile() {
    this.authService.getUsersID(262).subscribe({
      next: (response : User) => {
        this.userProfile = response;
      }
    })
  }
}
