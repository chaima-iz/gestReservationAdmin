import { Component } from '@angular/core';
import { ReservationService } from 'src/app/services/ReservationsService/reservation.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent {
  reservations:any;
  name = 'reservations';

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.getReservations();
  }
  getReservations() {
    this.reservationService.listGames().subscribe((reservations) => {
      this.reservations = reservations.data;
      
    console.log(this.reservations);
    });
  }
 

}
