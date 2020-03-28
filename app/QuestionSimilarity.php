<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class QuestionSimilarity extends Model
{
    protected $table = 'question_similarity';

    protected $filltable = [
        'question_id_1', 'question_id_2',
    ];

    public function question1()
    {
        return $this->belongsTo(Question::class, 'question_id_1');
    }

    public function question2()
    {
        return $this->belongsTo(Question::class, 'question_id_2');
    }
}
