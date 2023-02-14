import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/GameService/game.service';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.css']
})
export class ListGamesComponent implements OnInit{
  name="games";
  p: number = 1;
  games : any[] = [];
  constructor(private gameService: GameService , private router:Router){ }

  ngOnInit(): void {
    
    this.gameService.listGames().subscribe(
      res=>{
        this.games = res.data;
      }
    )
  }

  delete(id:any){
    this.gameService.deleteGame(id)
    .subscribe(
      res=>{
        // this.router.navigate(['/Games'])
        window.location.reload();
      },
      error=>{
        // localStorage.setItem("error" , "true");
        console.log(error);
      }
    )
  }

}
