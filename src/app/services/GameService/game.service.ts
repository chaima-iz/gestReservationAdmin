import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  
  private baseUrl = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient ) { }


  listGames(): Observable<any> {
    return this.http.get(this.baseUrl + '/games');
  }

  getGame(id:number):Observable<any> {
    return this.http.get(this.baseUrl + '/game/'+id);
  }

  updateGame(game:any): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const data = {
      "name" : game["name"],
      "maxPlayers" : game["maxPlayers"],
      "minPlayers" : game["minPlayers"],
      "desc" : game["desc"],
      "rules" : game["rules"],
      "difficulty" : game["difficulty"],
      "category" : game["category"]
  };
    return this.http.put(`${this.baseUrl}/editGame/${game['id']}` , data , {headers});
  }

  addGame(game:any): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const data = {
      "name" : game["name"],
      "maxPlayers" : game["maxPlayers"],
      "minPlayers" : game["minPlayers"],
      "desc" : game["desc"],
      "rules" : game["rules"],
      "difficulty" : game["difficulty"],
      "category" : game["category"],
      "picture": "null.jpeg"
  };
    return this.http.post(`${this.baseUrl}/addGame` , data , {headers});
  }
  deleteGame(id:number):Observable<any> {
    return this.http.delete(this.baseUrl + '/deleteGame/'+id);
  }

}
