import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  implements OnInit {
  constructor(private http: HttpClient) {}

  user:any;
  data:any;
  ngOnInit(): void {
    this.getUserData();
  }
  getUserData() {
    this.data=localStorage.getItem('user');
    this.user=JSON.parse(this.data);
    // console.log("user: ", JSON.parse(this.data));
  }
  logout() {
    localStorage.removeItem('logged_in');
    localStorage.removeItem('user');
    window.location.href = '/login';

    this.http.post('/logout', {}).subscribe(() => {
      // redirect to login or homepage
      window.location.href = '/login';
    });
}
}
