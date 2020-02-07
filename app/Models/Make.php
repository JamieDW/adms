<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Make extends Model
{
    /**
    * Get the models for the given car make.
    */
    public function models()
    {
        return $this->hasMany(\App\Models\Model::class);
    }
}
