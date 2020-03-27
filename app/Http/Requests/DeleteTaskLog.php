<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Repo\TaskLogRepo;
use Illuminate\Support\Facades\Auth;

class DeleteTaskLog extends FormRequest
{
    /**
     * @var TaskLogRepo
     */
    private $taskLogRepo;

    public function __construct(TaskLogRepo $taskLogRepo)
    {
        $this->taskLogRepo = $taskLogRepo;
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'id' => [
                'required',
                'integer',
                function($attribute, $value, $fail) {
                    $taskLog = $this->taskLogRepo->get($value);
                    if (!empty($taskLog) && $taskLog->user_id != Auth::user()->id) {
                        $fail('You don\'t have permission to delete this task log');
                    }
                },
            ],
        ];
    }
}
