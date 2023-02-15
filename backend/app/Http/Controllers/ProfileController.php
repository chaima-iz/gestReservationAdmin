<?php

namespace App\Http\Controllers;

use App\Models\Login;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ProfileController extends Controller
{
    public function updateProfilePassword(Request $request, $id){
        $infos = $request->validate([
            
            "currentPassword"=> ["required"],
            "newPassword"=> ["required"],
            "confirmPassword"=> ["required"],
        ]);

        $user = Login::where('id', $id)->first();

        if (Hash::check($infos["currentPassword"], $user->password)){
            if($infos["newPassword"]==$infos["confirmPassword"]){
                $user->password = Hash::make($infos["newPassword"]);
                $user->save();

                return response(
                    ['message' => 'Password updated', 'data' => $user]
                ,200);
            }
            
        }

        return response()->json(
            ['message' => 'error'],
             404
            );
    }

    public function updateProfile(Request $request, $id){
        $adminUpdate = $request->validate([
            "firstName" => ["required"],
            "lastName" => ["required"],
            "dob" => ["required"],
            "phone" => ["required"],
            "email" => ["required"],
            "address" => ["required"]
        ]);

        $admin = Login::find($id);

        $admin->firstName = $adminUpdate['firstName'];
        $admin->lastName = $adminUpdate['lastName'];
        $admin->dob = $adminUpdate['dob'];
        $admin->phone = $adminUpdate['phone'];
        $admin->email = $adminUpdate['email'];
        $admin->address = $adminUpdate['address'];

        $admin->save();

        return response()->json(
            ['message' => 'Admin updated', 'data' => $admin],
             200
            );
    }
}
