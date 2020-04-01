<?php

namespace App\UseCase;

use App\QA;
use App\Question;
use App\Support\Output;
use App\Client;
use Response;

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

    public function list($id)
    {
        return Client::findOrFail($id)
            ->load('qas');
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

    public function exportCSV($id)
    {
        $headers = [
            'Cache-Control' => 'must-revalidate, post-check=0, pre-check=0',
            'Content-type' => 'text/csv',
            'Content-Disposition' => 'attachment; filename=galleries.csv',
            'Expires' => '0',
            'Pragma' => 'public',
        ];
        $qas = QA::where('client_id', '=', $id)->get();
        $callback = function() use ($qas) {
            $handle = fopen('php://output', 'w');
            $headers = [
                'qa_id',
                'question',
                'answer',
                'answer_html',
            ];
            fputcsv($handle, $headers);
            foreach ($qas as $qa) {
                fputcsv($handle, [
                    'qa_id' => $qa->id,
                    'question' => $qa->question,
                    'answer' => $qa->answer,
                    'answer_html' => $qa->answer_html,
                ]);
            }
            fclose($handle);
        };
        return Response::stream($callback, 200, $headers);
    }
}
