<?php

namespace App\UseCase;

use App\Repo\TaskLogRepo;
use Illuminate\Support\Carbon;
use App\DTO\MonthResultDTO;
use App\TaskLog;

class MonthCalendarUseCase
{
    /**
     * @var TaskLogRepo
     */
    protected $taskLogRepo;

    public function __construct(TaskLogRepo $taskLogRepo)
    {
        $this->taskLogRepo = $taskLogRepo;
    }

    public function monthDaysCalendar($user, $year, $month)
    {
        $date = new Carbon();
        $date->setYear($year);
        if ($month >= 1 && $month <= 12) {
            $date->setMonth($month);
        }
        $taskLogs = $this->taskLogRepo->getMonthTaskLogs($user, $date);
        $daysInMonth = $date->daysInMonth;
        
        /**
         * @var MonthResultDTO[] $monthResult
         */
        $monthResult = [];
        foreach ($taskLogs as $taskLog) {
            $dayOfMonth = intval($taskLog->date->format('j')) - 1;
            if (!isset($monthResult[$dayOfMonth])) {
                $monthResult[$dayOfMonth] = new MonthResultDTO($taskLog->date, 0);
            }
            $monthResult[$dayOfMonth]->accumulateFromTaskLog($taskLog);
        }
        return array_values($monthResult);
    }
}
