import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { MaterialModule } from '@core/modules/material.module';
import { BookingDashboardService } from '@core/services/booking-dashboard.service';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
    BookingDashboardService
  ]
})
export class DashboardModule { }
