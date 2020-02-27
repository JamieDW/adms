<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Make extends Model
{
    /**
     * The attributes that should be hidden in arrays.
     *
     * @var array
     */
    protected $hidden = ['created_at', 'updated_at'];

    public function __toString()
    {
        return $this->name;
    }

    /**
    * Get the models for the given car make.
    */
    public function models()
    {
        return $this->hasMany(\App\Models\Model::class);
    }

    /**
    * Get the cars for the given car make.
    */
    public function cars()
    {
        return $this->hasMany(\App\Models\Car::class);
    }
}
