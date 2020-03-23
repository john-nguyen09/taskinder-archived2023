<template>
    <form @submit.prevent="saveTaskLogForm">
        <div class="form-row">
            <div class="col-5">
                <textarea class="form-control" :class="{ 'is-invalid': errors.has('description') }" placeholder="Description" v-model="description"></textarea>
            </div>
            <div class="col-auto">
                <date-picker placeholder="Date" :isInvalid="errors.has('date')" v-model="date" :attributes="attrs"></date-picker>
            </div>
            <div class="col-auto">
                <input type="text" class="form-control" :class="{ 'is-invalid': errors.has('duration') }" placeholder="Duration" v-model="formattedDuration" />
            </div>
            <div class="col-auto">
                <button class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>
</template>

<script>
import DatePicker from './form/date_picker';
import { fromText, toText } from '../modules/timeParser';

export default {
    computed: {
        formattedDuration: {
            get() {
                return this.$store.getters.taskLogForm.duration;
            },
            set(value) {
                this.$store.dispatch('setTaskLogFormDuration', value);
            },
        },
        description: {
            get() {
                return this.$store.getters.taskLogForm.description;
            },
            set(value) {
                this.$store.dispatch('setTaskLogFormDescription', value);
            },
        },
        date: {
            get() {
                return this.$store.getters.taskLogForm.date;
            },
            set(value) {
                this.$store.dispatch('setTaskLogFormDate', value);
            },
        },
        errors() {
            return this.$store.getters.taskLogErrors;
        },
    },
    data() {
        return {
            attrs: [
                {
                    key: 'today',
                    highlight: 'purple',
                    dates: new Date(),
                },
            ],
        }
    },
    methods: {
        saveTaskLogForm() {
            this.$store.dispatch('saveTaskLogForm');
        },
    },
    components: {
        DatePicker,
    },
}
</script>
