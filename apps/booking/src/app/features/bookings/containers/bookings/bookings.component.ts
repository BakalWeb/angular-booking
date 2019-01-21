import { Component, OnInit, ViewChild } from '@angular/core';
import { BookingService } from '@core/services/booking.service';
import { Booking } from '@core/interfaces/booking';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import * as moment from 'moment';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  bookings: Booking[] = [];
  bookingsMadeToday = 0;
  datasource: MatTableDataSource<Booking>;
  displayedColumns: string[] = [
    'id',
    'created',
    'bookingDate',
    'bookingTime',
    'bookingLength',
    'createdBy',
    'edit'
  ];

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.bookingService.returnBookings().subscribe(
      res => {
        this.datasource = new MatTableDataSource(res);
        console.log(res); // inspect console to view value
        this.bookings = res;
        this.datasource.sort = this.sort;
        this.datasource.paginator = this.paginator;

        this.generateDashboardData();
      },
      error => {
        console.log(error);
      }
    );
  }

  // this is bad practice and would be better suited to a dashboard service
  generateDashboardData(): void {
    const now = moment();
    this.bookingsMadeToday = this.bookings.filter(
      x => moment(x.created).isSameOrAfter(now, 'day')
    ).length;
  }
}
