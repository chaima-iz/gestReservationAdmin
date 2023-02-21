<?php

namespace App\Http\Controllers;

use App\Models\reservation;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    public function getReservations(){
        // $reservations = reservation::all();

        // $reservations = reservation::join('users', 'users.id', '=', 'reservations.id_user')
        //                    ->where('reservations.id_user', 1)
        //                    ->select('reservations.*','users.lastName','users.firstName','users.picture','users.email','users.phone')
        //                    ->get();
        $reservations = reservation::join('users', 'users.id', '=', 'reservations.id_user')
                            ->join('games', 'games.id', '=', 'reservations.id_game')
                            ->select('reservations.*', 'users.lastName', 'users.firstName', 'users.picture', 'users.email', 'users.phone', 'games.name')
                            ->get();

        return response()->json([
            'data' => $reservations
        ]);
    }
    public function updateStatus(Request $request, $id)
    {
        $reservation = reservation::findOrFail($id);
        $reservation->status = $request->input('status');
        $reservation->save();

        return response()->json(['message' => 'Reservation status updated successfully.']);
    }
}
