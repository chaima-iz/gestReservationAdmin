import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private http: HttpClient) {}

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
