import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestReservationAdmin';
  isLoginRoute=false;
  constructor(private router : Router){
    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        this.isLoginRoute = this.router.url ==='/login';
      }
    })
  }
}
