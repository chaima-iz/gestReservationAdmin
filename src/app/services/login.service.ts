import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) { }

  login(email : string , password : string): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const data = {
      email: email,
      password: password
    };
    return this.http.post(`${this.baseUrl}/login` , data , {headers});
  }
}