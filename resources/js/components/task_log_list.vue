<template>
    <div>
        <div class="mb-3">
            <form class="form-inline">
                <input
                    type="text"
                    class="form-control"
                    ref="searchTasks"
                    placeholder="Search tasks"
                    v-model="searchTaskKeywords"
                >
                <button
                    type="submit"
                    class="btn btn-danger"
                    @click.prevent="clearSearchTasks"
                    :disabled="searchTaskKeywords == ''"
                >Clear</button>
            </form>
        </div>
        <pagination
            v-if="taskLogLinks"
            aria-label="Task log navigation"
            :links="taskLogLinks"
            @link="goToLink"
            class="mb-3"
        />
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
                    class="btn btn-danger"
                    @click="deleteTaskLog(index)"
                    @blur="revokeDelete(index)"
                >
                    <div class="float-left">
                        <i class="fa fa-trash delete-icon"></i>
                    </div>
                    <transition name="slide-right">
                        <div class="float-left pl-1" v-if="toDeleteTaskLog && toDeleteTaskLog.id == taskLog.id">
                            <span>Delete</span>
                        </div>
                    </transition>
                </button>
            </div>
        </div>
        <pagination
            v-if="taskLogLinks"
            aria-label="Task log navigation"
            :links="taskLogLinks"
            @link="goToLink"
            class="mt-3"
        />
        <div v-if="isRequesting" class="overlay-spinner">
            <div class="spinner-border text-primary mx-auto" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { toText } from '../modules/timeParser';
import pagination from './layout/pagination';
import { debounce } from '../utils/debounce';

export default {
    components: {
        pagination,
    },
    data()  {
        return {
            searchTaskKeywords: '',
            currentFetchUrl: null,
        };
    },
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
        ...mapGetters([
            'taskLogLinks',
            'isRequesting',
        ]),
    },
    methods: {
        editTaskLog(index) {
            this.$store.dispatch('editTaskLog', index);
        },
        async deleteTaskLog(index) {
            const result = await this.$store.dispatch('deleteTaskLog', index);
            if (result) {
                await Promise.all([
                    this.$store.dispatch('fetchMonthResults'),
                    this.$store.dispatch('fetchDateInfo', this.$store.getters.selectedDate)
                ]);
            }
        },
        revokeDelete(index) {
            this.$store.dispatch('revokeDeleteTaskLog', index);
        },
        isLinkDisabled(link) {
            return !link.url;
        },
        goToLink(link) {
            if (!link.url) {
                return;
            }
            this.currentFetchUrl = link.url;
            this.$store.dispatch('fetchTaskLogs', {
                url: link.url,
                search: this.searchTaskKeywords,
            });
        },
        searchTasks: debounce(function(value) {
            this.$store.dispatch('fetchTaskLogs', {
                url: this.currentFetchUrl,
                search: value,
            });
        }, 300),
        clearSearchTasks() {
            this.searchTaskKeywords = '';
        },
    },
    mounted() {
        this.$store.dispatch('fetchTaskLogs');
    },
    watch: {
        searchTaskKeywords(value) {
            this.searchTasks(value);
        },
    },
}
</script>
