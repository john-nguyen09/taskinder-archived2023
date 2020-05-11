<template>
    <div class="row">
        <div class="col-4">
            <v-calendar
                is-expanded
                :attributes="monthResults"
                @dayclick="selectDate"
                @update:from-page="pageChange"
            ></v-calendar>
        </div>
        <div class="col-auto">
            <div v-for="(day, index) in monthSelectedDateInfo" :key="index" class="m-1">
                {{formatDate(day.date)}}: {{day.description}} {{toText(day.duration)}} <br />
            </div>
        </div>
        <div class="col-auto">
            <div v-for="day in monthSelectedDateInfo" :key="day.id" class="m-1">
                <button type="button" class="btn btn-warning py-0 px-1" @click="editTaskLog(day.id)">
                    <i class="fa fa-pencil-alt"></i>
                </button>
                <button
                    type="button"
                    class="btn btn-danger btn-confirm-delete py-0 px-1"
                    @click="deleteTaskLog(day.id)"
                    @blur="revokeDelete(day.id)"
                >
                    <div class="float-left">
                        <i class="fa fa-trash"></i>
                    </div>
                    <transition name="slide-right">
                        <div class="float-left pl-1" v-if="toDeleteTaskLog && toDeleteTaskLog.id == day.id">
                            <span>Delete</span>
                        </div>
                    </transition>
                </button>
                <br/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { format } from 'date-fns';
import { toText } from '../modules/timeParser';

export default {
    computed: {
        ...mapGetters([
            'monthResults',
            'monthSelectedDateInfo',
            'toDeleteTaskLog',
        ]),
    },
    mounted() {
        this.$store.dispatch('fetchDateInfo', new Date());
    },
    methods: {
        selectDate(day) {
            this.$store.dispatch('fetchDateInfo', day.date);
        },
        pageChange(page) {
            this.$store.dispatch('changeMonth', page);
        },
        formatDate(date) {
            return format(new Date(date), 'dd/MM');
        },
        toText(duration) {
            return toText(duration);
        },
        editTaskLog(id) {
            const index = this.$store.getters.taskLogs.findIndex(taskLog => taskLog.id === id);
            if (index >= 0) {
                this.$store.dispatch('editTaskLog', index);
            }
        },
        async deleteTaskLog(id) {
            const index = this.$store.getters.taskLogs.findIndex(taskLog => taskLog.id === id);
            if (index >= 0) {
                const result = await this.$store.dispatch('deleteTaskLog', index);
                if (result) {
                    await this.$store.dispatch('fetchMonthResults');
                    await this.$store.dispatch('fetchDateInfo', this.$store.getters.selectedDate);
                }
            }
        },
        revokeDelete(id) {
            const index = this.$store.getters.taskLogs.findIndex(taskLog => taskLog.id === id);
            if (index >= 0) {
                this.$store.dispatch('revokeDeleteTaskLog', index);
            }
        },
    },
}
</script>
