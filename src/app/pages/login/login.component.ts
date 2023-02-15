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
          localStorage.setItem("user" , JSON.stringify(res.user))
          localStorage.setItem("logged_in" , "true");
          console.log("it works");
          localStorage.setItem("user",res.user)
          this.router.navigate(['/'])
        }
      },
      error=>{
        console.log("it doesn't work");
        localStorage.setItem("error" , "true");
      }
    );
  }
  
    
}
