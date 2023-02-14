<?php

namespace App\Http\Controllers;

use App\Models\game;
use Illuminate\Http\Request;

class GameController extends Controller
{
    function addGame(Request $request){
        $newGame = $request->validate([
            "name" => ["required"],
            "maxPlayers" => ["required"],
            "minPlayers" => ["required"],
            "desc" => ["required"],
            "rules" => ["required"],
            "difficulty" => ["required"],
            "category" => ["required"]
        ]);
        $game = game::create([
            "name" => $newGame["name"],
            "maxPlayers" => $newGame["maxPlayers"],
            "minPlayers" => $newGame["minPlayers"],
            "desc" =>$newGame["desc"],
            "rules" => $newGame["rules"],
            "difficulty" => $newGame["difficulty"],
            "category" => $newGame["category"],
            "picture" => "null.jpeg"
        ]);
        return response($game , 201);
    }
    public function getGames(){
        $games = game::all();

        return response()->json([
            'data' => $games
        ]);
    }

    public function getGame($id){
        $game = game::find($id);

        return response()->json([
            'data' => $game
        ]);
    }

    public function updateGame(Request $request, $id){
        $gameUpdate = $request->validate([
            "name" => ["required"],
            "maxPlayers" => ["required"],
            "minPlayers" => ["required"],
            "desc" => ["required"],
            "rules" => ["required"],
            "difficulty" => ["required"],
            "category" => ["required"]
        ]);

        $game = game::find($id);

        $game->name = $gameUpdate['name'];
        $game->maxPlayers = $gameUpdate['maxPlayers'];
        $game->minPlayers = $gameUpdate['minPlayers'];
        $game->desc = $gameUpdate['desc'];
        $game->rules = $gameUpdate['rules'];
        $game->difficulty = $gameUpdate['difficulty'];
        $game->category = $gameUpdate['category'];

        $game->save();

        return response()->json(
            ['message' => 'Game updated', 'data' => $game],
             200
            );
    }
    public function deleteGame($id){
        $game = game::find($id);

        $game->delete();

        return response()->json(['message' => 'Game deleted'], 200);
    }
}
