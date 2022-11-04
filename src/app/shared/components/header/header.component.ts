import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ab-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isOpen: boolean = false
  sidebarItems:any

  constructor(private router:Router,
  ){}

  toggleMenu(){
    this.isOpen = !this.isOpen;
  }

  logout(){
    localStorage.removeItem('user')
    this.router.navigate(['auth/login'])
  }

}
