<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\UseCase\ClientUseCase;
use App\Http\Requests\CreateClientRequest;
use App\Http\Requests\DeleteClientRequest;

class ClientController extends Controller
{
    /**
     * @var ClientUseCase
     */
    private $clientUseCase;

    public function __construct(ClientUseCase $useCase)
    {
        $this->clientUseCase = $useCase;
    }

    public function list()
    {
        return $this->clientUseCase->list();
    }

    public function store(CreateClientRequest $request)
    {
        return $this->clientUseCase->store($request->all());
    }

    public function delete(DeleteClientRequest $request)
    {
        $this->clientUseCase->delete($request->all());
        return [
            'status' => 'deleted',
        ];
    }
}
