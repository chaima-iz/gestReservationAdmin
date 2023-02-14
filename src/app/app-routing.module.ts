import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { GamesComponent } from './pages/games/games.component';
import { EditGameComponent } from './pages/edit-game/edit-game.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

const routes: Routes = [ 
  { path: 'Reservations', component: ReservationsComponent },
  { path: 'Games', component: GamesComponent },
  { path: 'EditGame', component: EditGameComponent },
  { path: 'Profile', component: ProfilePageComponent },
  { path: 'login', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
