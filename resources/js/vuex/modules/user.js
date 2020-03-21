import Vue from 'vue'

const state = {
    status: '',
    profile: {}
}

const getters = {
    getProfile: state => state.profile,
    isProfileLoaded: state => !!state.profile.name,
}

const actions = {
    async userRequest({commit, dispatch}) {
        commit('userRequest');
        try {
            const resp = await axios.get('/api/user');
            commit('userSuccess', resp.data);
        } catch (err) {
            commit('userError');
            dispatch('authLogout');
        }
    },
}

const mutations = {
    userRequest: (state) => {
        state.status = 'loading';
    },
    userSuccess: (state, resp) => {
        state.status = 'success';
        Vue.set(state, 'profile', resp);
    },
    userError: (state) => {
        state.status = 'error';
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}