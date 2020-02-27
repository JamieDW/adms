<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model as BaseModel;

class Model extends BaseModel
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
    * Get the make for the given car model.
    */
    public function make()
    {
        return $this->belongsTo(\App\Models\Make::class);
    }

    /**
    * Get the cars for the given car model.
    */
    public function cars()
    {
        return $this->hasMany(\App\Models\Car::class);
    }

    /**
     * Scope a query to only include popular users.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeByMakeId($query, $make)
    {
        return $query->where('make_id', $make);
    }
}
