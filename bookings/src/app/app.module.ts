import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingsComponent } from './bookings/bookings.component';
import { NewBookingComponent } from './new-booking/new-booking.component';
import { PatientsComponent } from './patients/patients.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingsComponent,
    NewBookingComponent,
    PatientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
