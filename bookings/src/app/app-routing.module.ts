import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { BookingsComponent } from './bookings/bookings.component';
import { NewBookingComponent } from './new-booking/new-booking.component';
import { PatientsComponent } from './patients/patients.component';


const routes: Routes = [
  {path: 'searchbookings', component: BookingsComponent},
  {path: 'newbooking', component: NewBookingComponent},
  {path: 'patients', component: PatientsComponent},
  { path: '',
    redirectTo: 'searchbookings',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/bookings/' },
  ],
})
export class AppRoutingModule { }
