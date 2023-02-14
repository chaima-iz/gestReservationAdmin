import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/GameService/game.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent {
  game = {
    name: '',
    maxPlayers: '',
    minPlayers: '',
    desc: '',
    rules: '',
    difficulty: '',
    category:''
  };
  constructor(private gameService: GameService , private router:Router){ }

  addgame(){
    this.gameService.addGame(this.game)
    .subscribe(
        res=>{
          if(res){
            // localStorage.setItem("user" , JSON.stringify(res.user))
            // localStorage.setItem("logged_in" , "true");
            this.router.navigate(['/Games'])
          }
        },
        error=>{
          // localStorage.setItem("error" , "true");
          console.log(error);
        }
    );
  }
}
