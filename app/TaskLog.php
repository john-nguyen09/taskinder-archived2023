<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TaskLog extends Model
{
    protected $fillable = [
        'description', 'date', 'duration'
    ];

    protected $casts = [
        'date' => 'datetime:Y-m-d',
    ];

    protected function getDurationAttribute()
    {
        return [
            'hours' => floor($this->attributes['duration'] / 60),
            'minutes' => $this->attributes['duration'] % 60,
        ];
    }
}
