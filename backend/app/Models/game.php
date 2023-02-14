<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class game extends Model
{
    use HasFactory;
    protected $fillable = [
        'name', 
        'maxPlayers', 
        'minPlayers', 
        'desc', 
        'rules', 
        'difficulty', 
        'category', 
        'picture'
    ];
}
