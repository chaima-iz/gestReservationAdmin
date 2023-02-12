<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('games', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('maxPlayers');
            $table->integer('minPlayers');
            $table->text('desc');
            $table->text('rules');
            $table->enum('difficulty', ['easy', 'medium', 'hard', 'extreme']);
            $table->enum('category', ['puzzle', 'strategy', 'board', 'word', 'card', 'dice']);
            $table->string('picture');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('games');
    }
};
