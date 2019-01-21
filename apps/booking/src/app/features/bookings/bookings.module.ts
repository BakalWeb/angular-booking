import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BookingsComponent } from './containers/bookings/bookings.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@core/modules/material.module';
import { InMemoryApi } from '@core/services/InMemory/in-memory-api';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { BookingService } from '@core/services/booking.service';
import { BookingDetailsComponent } from './components/booking-details/booking-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
  {
    path: '',
    component: BookingsComponent
  },
  {
    path: ':id',
    component: BookingDetailsComponent
  }
];

@NgModule({
  declarations: [
    BookingsComponent,
    BookingDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(InMemoryApi, {delay: 500})
  ],
  providers: [
    BookingService,
  ],
  exports: [
    RouterModule,
    BookingsComponent,
    HttpClientModule
  ]
})
export class BookingsModule { }
