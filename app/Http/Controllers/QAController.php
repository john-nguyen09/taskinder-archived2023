<?php

namespace App\Http\Controllers;

use App\UseCase\QAUseCase;
use App\Http\Requests\CreateQARequest;
use App\Http\Requests\DeleteQARequest;
use Illuminate\Http\Request;

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

    public function list($id)
    {
        return $this->qaUseCase->list($id);
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

    public function exportCSV(Request $request)
    {
        $data = $request->validate([
            'id' => 'required|integer',
        ]);
        return $this->qaUseCase->exportCSV($data['id']);
    }
}
