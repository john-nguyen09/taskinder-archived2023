import Errors from "../../modules/errors";
import Vue from "vue";

const INITIAL_CLIENT_FORM = {
    id: 0,
    name: '',
};

const state = {
    isLoading: false,
    clientForm: { ...INITIAL_CLIENT_FORM },
    clients: [],
    toDeleteClient: null,
    errors: new Errors(),
};

const getters = {
    clientForm: state => state.clientForm,
    clients: state => state.clients,
    toDeleteClient: state => state.toDeleteClient,
};

const actions = {
    async fetchClients({commit}) {
        commit('isLoading', true);
        try {
            const response = await axios.get(`/api/client/`);
            commit('clients', response.data);
        } catch (err) {
            commit('errors', err);
        }
        commit('isLoading', false);
    },
    async storeClient({commit, getters, dispatch}) {
        commit('isLoading', true);
        try {
            const response = await axios.post(`/api/client/store`, getters.clientForm);
            commit('storeClient', response.data);
        } catch (err) {
            commit('errors', err);
        }
        dispatch('resetClientForm');
        commit('isLoading', false);
    },
    setClientFormName({commit, getters}, payload) {
        commit('clientForm', Object.assign(getters.clientForm, {
            name: payload,
        }));
    },
    resetClientForm({commit}) {
        commit('clientForm', { ...INITIAL_CLIENT_FORM });
    },
    editClient({commit, getters}, payload) {
        commit('clientForm', Object.assign(getters.clientForm, getters.clients[payload]));
    },
    async deleteClient({commit, getters}, payload) {
        if (getters.toDeleteClient !== null && getters.toDeleteClient.id == getters.clients[payload].id) {
            commit('isLoading', true);
            try {
                const response = await axios.post(`/api/client/delete`, {
                    id: getters.toDeleteClient.id,
                    _method: 'DELETE',
                });
                if (response.data.status === 'deleted') {
                    commit('deleteClient', payload);
                }
            } catch (err) {
                commit('errors', err);
            }
            commit('isLoading', false);
            commit('toDeleteClient', null);
            return;
        }
        commit('toDeleteClient', getters.clients[payload]);
    },
    revokeDeleteClient({commit}) {
        commit('toDeleteClient', null);
    },
};

const mutations = {
    isLoading(state, payload) {
        state.isLoading = payload;
    },
    clients(state, payload) {
        state.clients = payload;
    },
    storeClient(state, payload) {
        const i = state.clients.findIndex(client => client.id == payload.id);
        if (i >= 0) {
            Vue.set(state.clients, i, payload);
            return;
        }
        state.clients.push(payload);
    },
    clientForm(state, payload) {
        state.clientForm = payload;
    },
    toDeleteClient(state, payload) {
        state.toDeleteClient = payload;
    },
    deleteClient(state, payload) {
        state.clients.splice(payload, 1);
    },
    errors(state, payload) {
        state.errors.handle(payload);
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
