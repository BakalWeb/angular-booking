import { Injectable } from '@angular/core';
import { BookingService } from './booking.service';
import { BookingDashboard } from '@core/models/booking-dashboard';
import { Booking } from '@core/interfaces/booking';
import { Observable, of } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class BookingDashboardService {

  constructor(private bookingService: BookingService) { }

  generateDashboardData(bookings: Booking[]): Observable<BookingDashboard> {
    const bookingDashboard = new BookingDashboard();
    bookingDashboard.totalBookings = bookings.length;
    bookingDashboard.bookingsMadeToday = bookings.filter(
      x => moment(x.created).isSameOrAfter(moment(), 'day')
    ).length;

    return of(bookingDashboard);
  }
}
