<?php

namespace App\Http\Controllers;

use App\Models\Login;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    function login(Request $request){
        $request->validate([
            "email" => ["required"],
            "password" => ["required"],
        ]);
        $admin = Login::where('email', $request->email)->first();
       if (! $admin || ! Hash::check($request->password, $admin->password)){
            return response([
                'message'=>['user not found']
            ],404);
        }

        $token = $admin->createToken('appToken')->plainTextToken;
        $response = [
            'user'=>$admin,
            'token'=>$token
        ];
        return response($response , 201);
    }
}
