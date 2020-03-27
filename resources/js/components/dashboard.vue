<template>
    <div class="container-fluid mt-3">
        <div class="card mb-4">
            <div class="card-body">
                <task-log-form />
            </div>
        </div>
        <div class="card mb-4">
            <div class="card-body">
                <task-log-month-calendar />
            </div>
        </div>
        <div class="card mb-4">
            <div class="card-body">
                <task-log-list />
            </div>
        </div>
    </div>
</template>

<script>
import TaskLogForm from './task_log_form';
import TaskLogList from './task_log_list';
import TaskLogMonthCalendar from './task_log_month_calendar';

export default {
    components: {
        TaskLogForm,
        TaskLogList,
        TaskLogMonthCalendar,
    },
};
</script>
