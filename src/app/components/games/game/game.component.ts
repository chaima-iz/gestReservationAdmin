import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/GameService/game.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit{
  
  id : any ;
  game = {
    name: '',
    maxPlayers: '',
    minPlayers: '',
    desc: '',
    rules: '',
    difficulty: '',
    category:''
  };

  constructor(private gameService: GameService , private router:Router , private route: ActivatedRoute){ }
  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.id =  params["id"];
      }
    );
    
    this.gameService.getGame(this.id).subscribe(
      res=>{
        this.game = res.data;
      }
    );
    
  }

  update(){
    this.gameService.updateGame(this.game)
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
