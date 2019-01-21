import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '@core/services/booking.service';
import { Booking } from '@core/interfaces/booking';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {
  editType: string;
  id: number;
  booking = new Booking();

  // form
  formGroup: FormGroup;
  minDate = moment.utc(); // range validation
  maxDate = moment.utc().add(12, 'months'); // range validation

  constructor(
    private route: ActivatedRoute,
    private bookingService: BookingService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getRouteId();
  }

  getRouteId(): void {
    // get param id
    this.id =
      +this.route.snapshot.paramMap.get('id') > 0
        ? +this.route.snapshot.paramMap.get('id')
        : 0;
    this.editType = this.id > 0 ? 'update' : 'create';

    // return booking
    if (this.id > 0) {
      this.bookingService.returnBooking(this.id).subscribe(res => {
        this.booking = res != null ? res : new Booking();
      });
    }

    // check booking status
    if (this.booking.status !== 'confirmed') {
    this.initializeForm();
    }
  }

  initializeForm(): void {
    this.formGroup = this.formBuilder.group({
      created: [
        {
          value: moment.utc(this.booking.created).format('YYYY-MM-DD HH:mm'),
          disabled: true
        }
      ],
      bookingDate: [moment.utc(this.booking.bookingDate).add(7, 'days').format('YYYY-MM-DD')], // default a week ahead
      bookingTime: [moment.utc(this.booking.bookingTime).format('HH:mm')],
      createdBy: [this.booking.created], // assign to current user
    });
  }
}
