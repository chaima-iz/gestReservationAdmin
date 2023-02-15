<?php

namespace App\Http\Controllers;

use App\Models\reservation;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    public function getReservations(){
        $reservations = reservation::all();

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
