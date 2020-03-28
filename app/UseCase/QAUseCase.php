<?php

namespace App\UseCase;

use App\QA;
use App\Question;
use App\Support\Output;
use App\Client;

class QAUseCase
{
    /**
     * @var Output
     */
    private $output;

    public function __construct(Output $output)
    {
        $this->output = $output;
    }

    public function list()
    {
        return QA::with([
            'client'
        ])->get();
    }

    public function formData()
    {
        return [
            'clients' => Client::get(),
        ];
    }

    public function storeQA($data)
    {
        $data['answer_html'] = $this->output->textToHtml($data['answer']);
        if (!empty($data['id'])) {
            $qa = QA::find($data['id']);
            if (empty($qa)) {
                $qa = new QA($data);
            } else {
                $qa->fill($data);
            }
        } else {
            $qa = new QA($data);
        }
        $qa->save();
        $qa->load('client');

        $question = Question::where('question', '=', $data['question'])->first();
        if (!empty($question)) {
            $question = new Question($data);
            $question->save();
        }

        return $qa;
    }

    public function delete($data)
    {
        $qa = QA::findOrFail($data['id']);
        $qa->delete();
    }
}
