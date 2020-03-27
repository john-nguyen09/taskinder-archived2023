<?php

namespace App\Support;

use Illuminate\Contracts\Support\Jsonable;
use JsonSerializable;
use function MongoDB\BSON\toJSON;

class TimeLog implements Jsonable, JsonSerializable
{
    private $hours;
    private $minutes;

    public function __construct($numMinutes)
    {
        $this->hours = floor($numMinutes / 60);
        $this->minutes = $numMinutes % 60;
    }

    public function getMinutes()
    {
        return $this->hours * 60 + $this->minutes;
    }

    public function toJson($options = 0)
    {
        return json_encode($this->jsonSerialize(), $options);
    }

    public function jsonSerialize()
    {
        return [
            'hours' => $this->hours,
            'minutes' => $this->minutes,
        ];
    }
}
