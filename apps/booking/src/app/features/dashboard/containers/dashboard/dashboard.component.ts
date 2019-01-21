import { Component, OnInit } from '@angular/core';
import { BookingService } from '@core/services/booking.service';
import { Booking } from '@core/interfaces/booking';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
bookings: Booking[];
  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.getBookings();
  }

 getBookings(): void {
   this.bookingService.returnBookings().subscribe(response => {
    this.bookings = response;
    console.log(response);
   });
 }

}
