import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/services/ProfileService/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  implements  OnInit{
    
  constructor(private profileService: ProfileService , private router:Router , private route: ActivatedRoute){ }
    id : any;
    user : any;
    
    dataPassword={
      currentPassword : '',
      newPassword : '',
      confirmPassword : ''
    }

    dataUser = {
      firstName : '',
      lastName : '',
      dob : '',
      phone : '',
      email : '',
      address : ''
    };

    ngOnInit(): void {
      this.user=localStorage.getItem("user");
      this.user=JSON.parse(this.user);

      this.route.params.subscribe(
        params => {
          this.id =  params["id"];
        }
      );
      
      this.dataUser.firstName = this.user.firstName;
      this.dataUser.lastName = this.user.lastName;
      this.dataUser.dob = this.user.dob;
      this.dataUser.phone = this.user.phone;
      this.dataUser.email = this.user.email;
      this.dataUser.address = this.user.address;

    }
    // update(){
    //   console.log(this.dataUser);
    // }
    updateProfile(){
      this.profileService.updateProfile(this.dataUser,this.user.id)
        .subscribe(
          res=>{
            localStorage.setItem("user" , JSON.stringify(res.data))
            window.location.reload()
          },
          error=>{
            // localStorage.setItem("error" , "true");
            console.log(error);
          }
        );
    }

    updatePassword(){
      this.profileService.updatePassword(this.dataPassword , this.user.id)
      .subscribe(
        res=>{
          window.location.reload()
        },
        error=>{
          // localStorage.setItem("error" , "true");
          console.log(error);
        }
      )
    }
    
}
