<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class QA extends Model
{
    protected $table = 'q_as';

    protected $fillable = [
        'client_id', 'question', 'answer', 'answer_html',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }
}
