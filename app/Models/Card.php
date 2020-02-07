<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use App\Traits\Encryptable;

class Card extends Model
{
    use Encryptable;

    protected $fillable = ['*'];

    protected $encryptable = [
        'name',
        'number',
        'description'
    ];
}
