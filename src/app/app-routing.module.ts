import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { GamesComponent } from './pages/games/games.component';
import { EditGameComponent } from './pages/edit-game/edit-game.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { AddGamePageComponent } from './pages/add-game-page/add-game-page.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminGuard } from './guardes/admin.guard';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
const routes: Routes = [ 
  { path: '', component: ReservationsComponent,canActivate: [AdminGuard]  },

  { path: 'Reservations', component: ReservationsComponent,canActivate: [AdminGuard] },
  { path: 'Games', component: GamesComponent,canActivate: [AdminGuard] },
  { path: 'EditGame/:id', component: EditGameComponent,canActivate: [AdminGuard] },
  { path: 'Profile', component: ProfilePageComponent,canActivate: [AdminGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'addGame', component: AddGamePageComponent,canActivate: [AdminGuard] },
  { path: 'dashboard', component:DashboardPageComponent ,canActivate: [AdminGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
