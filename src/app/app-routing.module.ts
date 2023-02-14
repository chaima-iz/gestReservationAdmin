import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { GamesComponent } from './pages/games/games.component';
import { EditGameComponent } from './pages/edit-game/edit-game.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { AddGamePageComponent } from './pages/add-game-page/add-game-page.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [ 
  { path: 'Reservations', component: ReservationsComponent },
  { path: 'Games', component: GamesComponent },
  { path: 'EditGame/:id', component: EditGameComponent },
  { path: 'Profile', component: ProfilePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addGame', component: AddGamePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
