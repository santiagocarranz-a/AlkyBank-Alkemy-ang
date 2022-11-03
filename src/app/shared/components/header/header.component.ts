import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ab-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isOpen: boolean = false

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.isOpen = !this.isOpen;
  }

  logout(){
    localStorage.removeItem('user')
    this.router.navigate(['auth/login'])
  }

}
