<?php

namespace Database\Seeders;

use App\Models\Login;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class loginSeeder extends Seeder
{

    public function run()
    {
        $users=[[
            'firstName'=>'Walid',
            'lastName'=>'DAMOU',
            'dob'=>'2001-09-25',
            'phone'=>'+212696628710',
            'email'=>'damou.walid@ensam-casa.ma',
            'password'=>Hash::make('walid'),
            'picture'=>'walid.jpeg',
            "address"=> "Mhamid7, Imam Malik IMM E N 13, Marrakech"
        ],
        [
            "firstName"=>"Chaima",
            "lastName"=>"IZOUARHN",
            "dob"=>"2001-03-25",
            "phone"=>"+212666666666",
            "email"=>"izouarhn.chaima@ensam-casa.ma",
            "password"=>Hash::make('chaima'),
            "picture"=>"chaima.jpeg",
            "address"=> "RUE IMM TAGHZOUT TARAST INZEGAN, Agadir"
        ],
        [
            "firstName"=> "Aicha",
            "lastName"=> "Draoui",
            "dob"=> "2002-05-22",
            "phone"=> "+212666666666",
            "email"=> "draoui.aicha@ensam-casa.ma",
            "password"=> Hash::make('aicha'),
            "picture"=> "aicha.jpeg",
            "address"=> "Sidi Othmane, Casablanca"
        ]
    ];
    foreach ($users as $user) {
        Login::create($user);
    }
    }
}
