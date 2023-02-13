import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
const routes: Routes = [ 
  { path: 'login', component: AdminComponent },
  { path: 'Reservations', component: ReservationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
