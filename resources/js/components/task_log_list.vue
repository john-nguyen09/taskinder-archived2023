<template>
    <div>
        <div class="row border-bottom p-1 font-weight-bold">
            <div class="col-3">Description</div>
            <div class="col-3">Date</div>
            <div class="col-3">Duration</div>
        </div>
        <div v-if="taskLogs.length === 0" class="row p-1 border-top">
            <div class="col-12">No task logs</div>
        </div>
        <div class="row p-1 border-top" v-for="(taskLog, index) in taskLogs" :key="taskLog.id">
            <div class="col-3">{{taskLog.description}}</div>
            <div class="col-3">{{taskLog.date}}</div>
            <div class="col-3">{{taskLog.duration}}</div>
            <div class="col-3">
                <button type="button" class="btn btn-warning" @click="editTaskLog(index)"><i class="fa fa-pencil-alt"></i></button>
                <button
                    type="button"
                    class="btn btn-danger btn-confirm-delete"
                    :class="{ 'to-confirm': toDeleteTaskLog && toDeleteTaskLog.id == taskLog.id }"
                    @click="deleteTaskLog(index)"
                    @blur="revokeDelete(index)"
                >
                    <i class="fa fa-trash delete-icon"></i><span class="delete-text"> Delete</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { toText } from '../modules/timeParser';

export default {
    computed: {
        taskLogs() {
            const taskLogs = [];
            for (const taskLog of this.$store.getters.taskLogs) {
                taskLogs.push({
                    ...taskLog,
                    duration: toText(taskLog.duration),
                });
            }
            return taskLogs;
        },
        toDeleteTaskLog() {
            return this.$store.getters.toDeleteTaskLog;
        },
    },
    methods: {
        editTaskLog(index) {
            this.$store.dispatch('editTaskLog', index);
        },
        deleteTaskLog(index) {
            this.$store.dispatch('deleteTaskLog', index);
        },
        revokeDelete(index) {
            this.$store.dispatch('revokeDeleteTaskLog', index);
        },
    },
    mounted() {
        this.$store.dispatch('fetchTaskLogs');
    },
}
</script>
