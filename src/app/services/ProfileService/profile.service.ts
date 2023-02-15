import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private baseUrl = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient ) { }
    
  updateProfile(admin:any,id:number): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const data = {
      "email": admin['email'],
      "firstName": admin['firstName'],
      "lastName": admin['lastName'],
      "phone": admin['phone'],
      "dob": admin['dob'],
      "address": admin['address']
    };
    return this.http.put(`${this.baseUrl}/editProfile/${id}` , data , {headers});
  }


  updatePassword(dataPs:any,id:number): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const data = {
      "currentPassword": dataPs['currentPassword'],
      "newPassword": dataPs['newPassword'],
      "confirmPassword": dataPs['confirmPassword']
    };
    return this.http.put(`${this.baseUrl}/updateProfilePs/${id}` , data , {headers});
  }
  
}
