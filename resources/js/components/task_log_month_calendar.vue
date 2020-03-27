<template>
    <div class="row">
        <div class="col-4">
            <v-calendar
                is-expanded
                :attributes="monthResults"
                @dayclick="selectDate"
            ></v-calendar>
        </div>
        <div class="col-4">
            <span v-for="(day, index) in monthSelectedDateInfo" :key="index">
                {{formatDate(day.date)}}: {{day.description}} {{toText(day.duration)}} <br />
            </span>
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
        ]),
    },
    mounted() {
        this.$store.dispatch('fetchMonthResults');
        this.$store.dispatch('fetchDateInfo', format(new Date(), 'yyyy-MM-dd'));
    },
    methods: {
        selectDate(day) {
            this.$store.dispatch('fetchDateInfo', day.id);
        },
        formatDate(date) {
            return format(new Date(date), 'dd/MM');
        },
        toText(duration) {
            return toText(duration);
        },
    },
}
</script>
