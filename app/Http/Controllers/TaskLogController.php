<?php

namespace App\Http\Controllers;

use App\Repo\TaskLogRepo;
use App\Http\Requests\CreateTaskLog;
use App\Http\Requests\DeleteTaskLog;

class TaskLogController extends Controller
{
    /**
     * @var TaskLogRepo
     */
    private $taskLogRepo;

    public function __construct(TaskLogRepo $taskLogRepo)
    {
        $this->taskLogRepo = $taskLogRepo;
    }

    public function list()
    {
        return $this->taskLogRepo->list();
    }

    public function view($id)
    {
        return $this->taskLogRepo->get($id);
    }

    public function store(CreateTaskLog $req)
    {
        $data = $req->all();
        if (!empty($data['id'])) {
            $taskLog = $this->taskLogRepo->get($data['id']);
            $taskLog->fill($data);
            $taskLog->save();
        } else {
            $taskLog = $this->taskLogRepo->create($data);
        }
        return $taskLog;
    }

    public function delete(DeleteTaskLog $req)
    {
        $data = $req->all();
        $taskLog = $this->taskLogRepo->get($data['id']);
        $taskLog->delete();
        return [
            'status' => 'deleted',
        ];
    }
}
