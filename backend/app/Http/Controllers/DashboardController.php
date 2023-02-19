<?php

namespace App\Http\Controllers;

use App\Models\game;
use App\Models\Login;
use App\Models\reservation;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function getData(){
        $games = game::all();
        $admins = Login::all();
        $reservations = reservation::all();

        $data = [
            'gamesCount' => $games->count(),
            'adminsCount' => $admins->count(),
            'reservationsCount' => $reservations->count(),
            'games' => $games
        ];
        
        return response()->json([
            'data' => $data,
        ]);
    }
}
