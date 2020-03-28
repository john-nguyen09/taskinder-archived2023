<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = [
        'question',
    ];

    public function similarQuestions()
    {
        return $this->hasManyThrough(
            Question::class, QuestionSimilarity::class,
            'question_id_1', 'question_id_2', 'id', 'id');
    }
}
