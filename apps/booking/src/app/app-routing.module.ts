import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './features/dashboard/containers/dashboard/dashboard.component';
import { BookingsComponent } from './features/bookings/containers/bookings/bookings.component';
import { BookingDetailsComponent } from './features/bookings/components/booking-details/booking-details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'bookings',
    component: BookingsComponent,
    // children: [
    //   {
    //     path: ':id',
    //   component: BookingDetailsComponent
    // }
    // ]
  },
  {
    path: 'bookings/:id',
    component: BookingDetailsComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const ExportedComponents = [
  DashboardComponent,
  BookingsComponent,
  BookingDetailsComponent
];
