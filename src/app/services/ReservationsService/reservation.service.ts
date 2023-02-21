import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  url: string = 'http://localhost:8000';
 

  constructor(private http: HttpClient,private router:Router) { }

  listGames(): Observable<any> {
    return this.http.get<any>(this.url + '/api/reservations');
  }

  onStatusChange(reservationId: number, newStatus: string) {
  this.http.put(this.url + `/api/reservations/${reservationId}`, { status: newStatus })
    .subscribe(() => {
      window.location.reload();

    });

    
  

    // console.log(reservationId);
    // console.log(newStatus);
  }
}
