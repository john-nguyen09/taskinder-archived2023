<?php

namespace App\UseCase;

use App\Client;

class ClientUseCase
{
    public function list()
    {
        return Client::all();
    }

    public function store($data)
    {
        if (!empty($data['id'])) {
            $client = Client::find($data['id']);
            if (empty($client)) {
                $client = new Client($data);
            } else {
                $client->fill($data);
            }
        } else {
            $client = new Client($data);
        }
        $client->save();
        return $client;
    }

    public function delete($data)
    {
        /**
         * @var Client $client
         */
        $client = Client::findOrFail($data['id']);
        $client->qas()->delete();
        $client->delete();
    }
}
