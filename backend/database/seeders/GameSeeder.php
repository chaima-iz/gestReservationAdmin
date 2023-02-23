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
                'name' => 'Ludo',
                'maxPlayers' => 4,
                'minPlayers' => 2,
                'desc' => 'Ludo is a classic board game that is easy to learn and fun to play. It involves rolling dice and moving pieces around the board to reach the finish line before your opponents.',
                'rules' => 'To win Ludo, you must move all your pieces from your home area to the center of the board and then to your finish line. You can only move your pieces by rolling the dice, and you must follow the numbered squares on the board. You can capture your opponent’s pieces by landing on the same square as them, which sends them back to their home area. The first player to move all their pieces to the finish line wins the game.',
                'difficulty' => 'easy',
                'category' => 'board',
                'picture' => 'ludo_game.jpg'
            ],
            [
                'name' => 'Jenga',
                'maxPlayers' => 8,
                'minPlayers' => 1,
                'desc' => 'Jenga is a game of physical skill where players take turns removing one block at a time from a tower made of 54 blocks. The objective is to not topple the tower while removing the blocks.',
                'rules' => 'To play Jenga, players take turns removing one block from any level of the tower, except for the top, and place it on the top of the tower. The game continues until the tower falls or a player successfully moves a block from the tower and places it on the top. The player who moves the last block without making the tower fall is the winner.',
                'difficulty' => 'medium',
                'category' => 'strategy',
                'picture' => 'jenga_game.jpeg'
            ],
            [
                'name' => 'Monopoly',
                'maxPlayers' => 8,
                'minPlayers' => 2,
                'desc' => 'Monopoly is a classic board game that simulates a real estate market. Players buy, sell, and trade properties to make money and bankrupt their opponents.',
                'rules' => 'To play Monopoly, players roll dice to move around the board, buying and selling properties as they go. They can collect rent from other players who land on their properties, and can improve their properties with houses and hotels. The game continues until all players but one have gone bankrupt.',
                'difficulty' => 'medium',
                'category' => 'board',
                'picture' => 'monopoly_game.jpg'
            ],
            [
                'name' => 'Scrabble',
                'maxPlayers' => 4,
                'minPlayers' => 2,
                'desc' => 'Scrabble is a word game where players create and score points by forming words on a board using letter tiles.',
                'rules' => 'To play Scrabble, players draw seven letter tiles each and take turns forming words on the board, using at least one existing letter on the board for each new word. Each letter has a point value, and players score points based on the total value of the letters in their word. The game continues until all tiles have been used or no more words can be formed. The player with the highest score at the end of the game wins.',
                'difficulty' => 'hard',
                'category' => 'word',
                'picture' => 'scrabble_game.png'
            ],
            [
                'name' => 'Uno',
                'maxPlayers' => 10,
                'minPlayers' => 2,
                'desc' => 'Uno is a popular card game where players race to get rid of all their cards by matching them to the card on the top of the discard pile.',
                'rules' => 'To play Uno, each player is dealt seven cards, and the rest of the cards are placed in a draw pile. The top card of the draw pile is turned over to start a discard pile. Players take turns matching a card from their hand to the top card of the discard pile, either by color or by number. Special cards such as "Skip", "Reverse", "Draw Two" and "Wild" can also be played to affect the gameplay. The first player to get rid of all their cards wins the game.',
                'difficulty' => 'easy',
                'category' => 'card',
                'picture' => 'uno_game.jpg'
            ]















        ];

        foreach ($games as $game) {
            game::create($game);
        }
    }
}
