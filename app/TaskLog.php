<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Support\TimeLog;

class TaskLog extends Model
{
    use \ProVision\Searchable\Traits\SearchableTrait;

    protected $fillable = [
        'description', 'date', 'duration', 'user_id',
    ];

    protected $casts = [
        'date' => 'datetime:Y-m-d',
    ];

    protected function getDurationAttribute()
    {
        return new TimeLog($this->attributes['duration']);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @inheritDoc
     */
    protected function getSearchableTitleColumns()
    {
        return [];
    }

    /**
     * @inheritDoc
     */
    protected function getSearchableContentColumns()
    {
        return [
            'description',
        ];
    }
}
