<?php

namespace Database\Seeders;

use App\Models\game;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $games = [
            [
                'name' => 'Game 1',
                'maxPlayers' => 6,
                'minPlayers' => 2,
                'desc' => 'Description for game 1',
                'rules' => 'Rules for game 1',
                'difficulty' => 'easy',
                'category' => 'board',
                'picture' => 'game1.jpg'
            ],
            [
                'name' => 'Game 2',
                'maxPlayers' => 4,
                'minPlayers' => 1,
                'desc' => 'Description for game 2',
                'rules' => 'Rules for game 2',
                'difficulty' => 'medium',
                'category' => 'puzzle',
                'picture' => 'game2.jpg'
            ],
            [
                'name' => 'Game 3',
                'maxPlayers' => 8,
                'minPlayers' => 3,
                'desc' => 'Description for game 3',
                'rules' => 'Rules for game 3',
                'difficulty' => 'hard',
                'category' => 'strategy',
                'picture' => 'game3.jpg'
            ],
        ];

        foreach ($games as $game) {
            game::create($game);
        }
    }
}
