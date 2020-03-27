<?php

namespace App\DTO;

use App\TaskLog;
use Illuminate\Contracts\Support\Jsonable;
use JsonSerializable;
use Illuminate\Support\Carbon;
use App\Support\TimeLog;

class MonthResultDTO implements Jsonable, JsonSerializable
{
    /**
     * @var Carbon
     */
    private $date;
    private $duration;

    public function __construct(Carbon $date, $duration)
    {
        $this->date = $date;
        $this->duration = $duration;
    }

    public function accumulateFromTaskLog(TaskLog $taskLog)
    {
        $this->duration += $taskLog->duration->getMinutes();
    }

    /**
     * Convert the object to its JSON representation.
     *
     * @param  int  $options
     * @return string
     */
    public function toJson($options = 0)
    {
        return json_encode($this->jsonSerialize(), $options);
    }

    public function jsonSerialize()
    {
        return [
            'date' => $this->date->format('Y-m-d'),
            'duration' => new TimeLog($this->duration),
        ];
    }
}
