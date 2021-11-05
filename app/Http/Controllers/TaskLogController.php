<?php

namespace App\Http\Controllers;

use App\Repo\TaskLogRepo;
use App\Http\Requests\CreateTaskLog;
use App\Http\Requests\DeleteTaskLog;
use App\UseCase\MonthCalendarUseCase;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Carbon;
use Illuminate\Http\Request;
use App\Http\Resources\TaskLogResource;

class TaskLogController extends Controller
{
    /**
     * @var TaskLogRepo
     */
    private $taskLogRepo;

    /**
     * @var MonthCalendarUseCase
     */
    private $useCase;

    public function __construct(
        TaskLogRepo $taskLogRepo,
        MonthCalendarUseCase $useCase
    ) {
        $this->taskLogRepo = $taskLogRepo;
        $this->useCase = $useCase;
    }

    public function list(Request $request)
    {
        $search = $request->input('search');
        return $this->taskLogRepo->list(Auth::user(), $search);
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
            $data['user_id'] = Auth::user()->id;
            $taskLog = $this->taskLogRepo->create($data);
        }
        return (new TaskLogResource($taskLog))->jsonSerialize();
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

    public function monthCalendar(Request $request, $year, $month)
    {
        return $this->useCase->monthDaysCalendar($request->user(), $year, $month);
    }

    public function dateInfo(Request $request, $date)
    {
        $date = Carbon::createFromFormat('Y-m-d', $date);
        return $this->taskLogRepo->getDateInfo($request->user(), $date);
    }
}
