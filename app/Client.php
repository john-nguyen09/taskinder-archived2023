<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $fillable = ['name'];

    public function qas()
    {
        return $this->hasMany(QA::class);
    }
}
