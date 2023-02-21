import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReservationService } from 'src/app/services/ReservationsService/reservation.service';
@Component({
  selector: 'app-list-reservations',
  templateUrl: './list-reservations.component.html',
  styleUrls: ['./list-reservations.component.css'],
})
export class ListReservationsComponent {
  p: number = 1;
  @Input() reservations!: any[];



  constructor(private reservationService: ReservationService) {}

  onStatusChange(reservationId: number, newStatus: string) {
    this.reservationService.onStatusChange(reservationId, newStatus);
    // console.log(reservationId);
    // console.log(newStatus);
  }
}
