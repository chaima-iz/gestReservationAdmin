<?php

<<<<<<< HEAD
use App\Http\Controllers\GameController;
=======
use App\Http\Controllers\LoginController;
>>>>>>> 3e0c89d33c71fd2351f30a61bb4268e83ad725f4
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/games',[GameController::class,'getGames']);
Route::get('/game/{id}',[GameController::class,'getGame']);
Route::post('/addGame',[GameController::class,'addGame']);
Route::put('/editGame/{id}',[GameController::class,'updateGame']);
Route::delete('/deleteGame/{id}',[GameController::class,'deleteGame']);
Route::post("login",[LoginController::class,'login']);
