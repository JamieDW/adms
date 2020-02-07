<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model as BaseModel;

class Model extends BaseModel
{


    /**
    * Get the make for the given car model.
    */
    public function make()
    {
        return $this->belongsTo(\App\Models\Make::class);
    }
}
