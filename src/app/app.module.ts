import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { ListReservationsComponent } from './components/reservations/list-reservations/list-reservations.component';
import { PaginationComponent } from './layouts/pagination/pagination.component';
import { SearchbarComponent } from './layouts/searchbar/searchbar.component';
import { AdminComponent } from './pages/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ReservationsComponent,
    ListReservationsComponent,
    PaginationComponent,
    SearchbarComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
