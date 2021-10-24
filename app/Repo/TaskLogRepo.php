<?php

namespace App\Repo;

use App\TaskLog;
use Illuminate\Support\Carbon;
use App\User;

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

    public function list(User $user, $search = null)
    {
        $query = TaskLog::where('user_id', '=', $user->id)
            ->orderBy('date', 'DESC');
        if (!empty($search)) {
            $query->search($search);
        }
        return $query->paginate(100);
    }

    /**
     * @param Carbon $date
     */
    public function getMonthTaskLogs($user, $date)
    {
        $begin = (clone $date)
            ->modify('first day of this month')
            ->setTime(0, 0, 0);
        $end = (clone $date)
            ->modify('last day of this month')
            ->setTime(23, 59, 59);

        return $user->taskLogs()
            ->where('date', '>=', $begin)
            ->where('date', '<=', $end)
            ->get();
    }

    public function getDateInfo($user, Carbon $date)
    {
        $begin = (clone $date)->setTime(0, 0, 0);
        $end = (clone $date)->setTime(23, 59, 59);

        return $user->taskLogs()
            ->where('date', '>=', $begin)
            ->where('date', '<=', $end)
            ->get();
    }
}
