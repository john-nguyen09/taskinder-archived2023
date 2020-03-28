import Errors from "../../modules/errors";
import { toSeconds, toText } from "../../modules/timeParser";
import { parse, format } from "date-fns";
import Vue from "vue";

const INITIAL_TASK_LOG_FORM = {
    id: null,
    description: '',
    date: null,
    duration: '',
}

const state = {
    isRequesting: false,
    taskLogForm: { ...INITIAL_TASK_LOG_FORM },
    toDeleteTaskLog: null,
    taskLogs: [],
    errors: new Errors(),
};

const getters = {
    taskLogs: state => state.taskLogs,
    taskLogForm: state => state.taskLogForm,
    toDeleteTaskLog: state => state.toDeleteTaskLog,
    taskLogErrors: state => state.errors,
};

function prepareTaskLogForm(taskLog) {
    return {
        ...taskLog,
        ... {
            date: parse(taskLog.date, 'yyyy-MM-dd', new Date()),
            duration: toText(taskLog.duration),
        },
    };
}

const actions = {
    async fetchTaskLogs({commit}) {
        commit('setIsRequesting', true);
        const response = await axios.get('/api/taskLog');
        commit('setTaskLogs', response.data);
        commit('setIsRequesting', false);
    },
    async saveTaskLogForm({state, commit}) {
        commit('setIsRequesting', true);
        const payload = {
            ...state.taskLogForm,
            ... {
                date: state.taskLogForm.date ? format(state.taskLogForm.date, 'yyyy-MM-dd') : '',
                duration: toSeconds(state.taskLogForm.duration),
            },
        };
        try {
            const response = await axios.post(`/api/taskLog/save`, payload);
            commit('saveTaskLog', response.data);
        } catch (err) {
            console.log(err);
            commit('taskLogError', err.response.data);
        }
        commit('setTaskLogForm', INITIAL_TASK_LOG_FORM);
        commit('setIsRequesting', false);
    },
    editTaskLog({state, commit}, payload) {
        commit('setTaskLogForm', prepareTaskLogForm(state.taskLogs[payload]));
    },
    async deleteTaskLog({state, commit}, payload) {
        if (state.toDeleteTaskLog !== null && state.toDeleteTaskLog.id == state.taskLogs[payload].id) {
            try {
                const resp = await axios.post(`/api/taskLog/delete`, {
                    _method: 'DELETE',
                    id: state.toDeleteTaskLog.id,
                });
                if (resp.data.status === 'deleted') {
                    commit('deleteTaskLog', payload);
                }
            } catch(err) {
                commit('errors', err);
            }
            commit('setToDeleteTaskLog', null);
            return;
        }
        commit('setToDeleteTaskLog', state.taskLogs[payload]);
    },
    revokeDeleteTaskLog({commit}) {
        commit('setToDeleteTaskLog', null);
    },
    resetTaskLogForm({commit}) {
        commit('setTaskLogForm', INITIAL_TASK_LOG_FORM);
    },
    setTaskLogFormDescription({commit}, payload) {
        commit('setTaskLogForm', {
            description: payload,
        });
    },
    setTaskLogFormDate({commit}, payload) {
        commit('setTaskLogForm', {
            date: payload,
        });
    },
    setTaskLogFormDuration({commit}, payload) {
        commit('setTaskLogForm', {
            duration: payload,
        });
    },
};

const mutations = {
    setIsRequesting(state, payload) {
        state.isRequesting = payload;
    },
    errors(state, payload) {
        state.errors.handle(payload);
    },
    setTaskLogs(state, payload) {
        state.taskLogs = payload;
    },
    saveTaskLog(state, payload) {
        for (const [i, taskLog] of state.taskLogs.entries()) {
            if (taskLog.id == payload.id) {
                Vue.set(state.taskLogs, i, payload);
                return;
            }
        }
        state.taskLogs.push(payload);
    },
    setTaskLogForm(state, payload) {
        state.taskLogForm = Object.assign(state.taskLogForm, payload);
    },
    setToDeleteTaskLog(state, payload) {
        state.toDeleteTaskLog = payload;
    },
    deleteTaskLog(state, payload) {
        state.taskLogs.splice(payload, 1);
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
