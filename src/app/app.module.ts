import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { ListReservationsComponent } from './components/reservations/list-reservations/list-reservations.component';
import { PaginationComponent } from './layouts/pagination/pagination.component';
import { SearchbarComponent } from './layouts/searchbar/searchbar.component';
import { ListGamesComponent } from './components/games/list-games/list-games.component';
import { GamesComponent } from './pages/games/games.component';
import { EditGameComponent } from './pages/edit-game/edit-game.component';
import { GameComponent } from './components/games/game/game.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ReservationsComponent,
    ListReservationsComponent,
    PaginationComponent,
    SearchbarComponent,
    ListGamesComponent,
    GamesComponent,
    EditGameComponent,
    GameComponent,
    ProfileComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
