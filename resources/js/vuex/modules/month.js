import Errors from '../../modules/errors';
import { toText } from '../../modules/timeParser';

const INITIAL_MONTH = {
    highlight: {
        fillMode: 'light',
        color: 'red',
    },
    dates: new Date(),
};

const state = {
    isLoading: false,
    currentMonth: new Date(),
    monthResults: [
        INITIAL_MONTH,
    ],
    selectedDateInfo: [],
    errors: new Errors(),
};

const getters = {
    monthResults: state => state.monthResults,
    monthSelectedDateInfo: state => state.selectedDateInfo,
};

const actions = {
    async fetchMonthResults({commit, state}) {
        commit('isLoading', true);
        try {
            const month = state.currentMonth.getMonth() + 1;
            const response = await axios.get(`/api/taskLog/monthCalendar/${month}`);
            commit('monthResults', response.data);
        } catch (err) {
            commit('errors', err);
        }
        commit('isLoading', false);
    },
    async fetchDateInfo({commit}, payload) {
        commit('isLoading', true);
        try {
            const response = await axios.get(`/api/taskLog/dateInfo/${payload}`);
            commit('selectedDateInfo', response.data);
        } catch (err) {
            commit('errors', err);
        }
        commit('isLoading', false);
    },
    async changeMonth({commit, dispatch}, payload) {
        const date = new Date();
        date.setMonth(payload.month - 1);
        date.setFullYear(payload.year);
        commit('currentMonth', date);
        await dispatch('fetchMonthResults');
    },
};

const mutations = {
    isLoading(state, payload) {
        state.isLoading = payload;
    },
    monthResults(state, payload) {
        state.monthResults = [
            INITIAL_MONTH,
        ];
        state.selectedDateInfo = [];
        const loggedDays = {
            dot: 'green',
            dates: [],
        };
        for (const day of payload) {
            const date = new Date(day.date);
            loggedDays.dates.push(date);
            state.monthResults.push({
                dates: date,
                popover: {
                    label: toText(day.duration),
                },
            });
        }
        state.monthResults.push(loggedDays);
    },
    selectedDateInfo(state, payload) {
        state.selectedDateInfo = payload;
    },
    currentMonth(state, payload) {
        state.currentMonth = payload;
    },
    errors(state, payload) {
        if (payload.response) {
            const response = payload.response;
            if (response.data.errors) {
                state.errors.record(response.data.errors);
            }
        } else {
            state.errors.record([
                'Unknown error',
            ]);
        }
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
