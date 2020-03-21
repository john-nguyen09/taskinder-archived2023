<?php

namespace App\Repo;

use App\TaskLog;

class TaskLogRepo
{
    /**
     * @return TaskLog
     */
    public function create($data)
    {
        $taskLog = new TaskLog($data);
        $taskLog->save();
        return $taskLog;
    }

    /**
     * @return TaskLog
     */
    public function get($id)
    {
        return TaskLog::find($id);
    }

    public function list()
    {
        return TaskLog::all();
    }
}
