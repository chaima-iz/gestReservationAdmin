import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email : string = '';
  password : string = '';
  constructor(private loginservice : LoginService , private router:Router){ }
  submit() {
    this.loginservice.login(this.email , this.password)
    .subscribe(
      res=>{
        if(res.user){
          console.log("it works");
          this.router.navigate(['/'])
        }
      },
      error=>{
        console.log("it doesn't work");
      }
    );
  }
  
    
}