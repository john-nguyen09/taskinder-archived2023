<?php

namespace App\Http\Controllers;

use App\UseCase\QAUseCase;
use App\Http\Requests\CreateQARequest;
use App\Http\Requests\DeleteQARequest;

class QAController extends Controller
{
    /**
     * @var QAUseCase
     */
    private $qaUseCase;

    public function __construct(QAUseCase $qaUseCase)
    {
        $this->qaUseCase = $qaUseCase;
    }

    public function list()
    {
        return $this->qaUseCase->list();
    }

    public function formData()
    {
        return $this->qaUseCase->formData();
    }

    public function store(CreateQARequest $request)
    {
        return $this->qaUseCase->storeQA($request->all());
    }

    public function delete(DeleteQARequest $request)
    {
        $this->qaUseCase->delete($request->all());
        return [
            'status' => 'deleted',
        ];
    }
}
