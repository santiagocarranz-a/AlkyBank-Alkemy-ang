import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'ab-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent {
//all routes

//current route variable
innerRoutes:string[]= []
currentRoute: string

  constructor(private router: Router) { 
    this.currentRoute = "";
    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd){
        this.currentRoute = event.url;        
        console.log(this.currentRoute)   
      }
      this.currentRoute = this.currentRoute.replace(/^\//, "")
      if(this.currentRoute == "home"){
        this.currentRoute = ""
      }
      this.innerRoutes = this.currentRoute.split("/")
      console.log(this.innerRoutes.length)

      

    });
  }

}
