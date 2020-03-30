import Errors from "../../modules/errors";
import Vue from "vue";
import fileDownload from "js-file-download";

const INITIAL_QA_FORM = {
    id: 0,
    clientId: 0,
    question: '',
    answer: '',
};

const state = {
    isLoading: false,
    qaForm: { ...INITIAL_QA_FORM },
    client: { id: 0, name: '' },
    qas: [],
    toDeleteQA: null,
    errors: new Errors(),
};

const getters = {
    qaForm: state => state.qaForm,
    qaClient: state => state.client,
    qas: state => state.qas,
    toDeleteQA: state => state.toDeleteQA,
    qaErrors: state => state.errors,
};

const actions = {
    async fetchQAs({commit}, payload) {
        commit('isLoading', true);
        try {
            const response = await axios.get(`/api/qa/${payload}`);
            commit('qas', response.data);
        } catch (err) {
            commit('errors', err);
        }
        commit('isLoading', false);
    },
    async storeQA({commit, getters, dispatch}) {
        commit('isLoading', true);
        try {
            const response = await axios.post(`/api/qa/store`, Object.assign({}, getters.qaForm, {
                client_id: getters.qaForm.clientId,
            }));
            commit('storeQA', response.data);
            dispatch('resetQAForm');
        } catch (err) {
            commit('errors', err);
        }
        commit('isLoading', false);
    },
    resetQAForm({commit, getters}) {
        commit('qaForm', Object.assign({}, INITIAL_QA_FORM, {
            clientId: getters.qaForm.clientId,
        }));
    },
    setQAFormClientId({commit, getters}, payload) {
        commit('qaForm', Object.assign(getters.qaForm, {
            clientId: payload,
        }));
    },
    setQAFormQuestion({commit, getters}, payload) {
        commit('qaForm', Object.assign(getters.qaForm, {
            question: payload,
        }));
    },
    setQAFormAnswer({commit, getters}, payload) {
        commit('qaForm', Object.assign(getters.qaForm, {
            answer: payload,
        }));
    },
    editQA({commit, getters}, payload) {
        commit('qaForm', Object.assign(getters.qaForm, getters.qas[payload]));
    },
    async deleteQA({commit, getters}, payload) {
        if (getters.toDeleteQA !== null && getters.toDeleteQA.id === getters.qas[payload].id) {
            commit('isLoading', true);
            try {
                const response = await axios.post(`/api/qa/delete`, {
                    _method: 'DELETE',
                    id: getters.toDeleteQA.id,
                });
                if (response.data.status === 'deleted') {
                    commit('deleteQA', payload);
                }
            } catch (err) {
                commit('errors', err);
            }
            commit('isLoading', false);
            commit('toDeleteQA', null);
            return;
        }
        commit('toDeleteQA', getters.qas[payload]);
    },
    revokeDeleteQA({commit}) {
        commit('toDeleteQA', null);
    },
    async exportQAs({commit, getters}) {
        commit('isLoading', true);
        try {
            const response = await axios.post(`/api/qa/exportCSV`, {
                id: getters.qaClient.id,
            });
            fileDownload(response.data, `${getters.qaClient.name}-qa.csv`);
        } catch (err) {
            commit('errors', err);
        }
        commit('isLoading', false);
    },
};

const mutations = {
    isLoading(state, payload) {
        state.isLoading = payload;
    },
    qas(state, payload) {
        state.client = payload;
        state.qas = payload.qas;
    },
    qaForm(state, payload) {
        state.qaForm = payload;
    },
    storeQA(state, payload) {
        const i = state.qas.findIndex(qa => qa.id == payload.id);
        if (i >= 0) {
            Vue.set(state.qas, i, payload);
            return;
        }
        state.qas.push(payload);
    },
    toDeleteQA(state, payload) {
        state.toDeleteQA = payload;
    },
    deleteQA(state, payload) {
        state.qas.splice(payload, 1);
    },
    errors(state, err) {
        state.errors.handle(err);
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
