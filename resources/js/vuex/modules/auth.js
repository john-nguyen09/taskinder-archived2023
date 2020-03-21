import Cookies from 'js-cookie'
import Errors from './../../modules/errors';

const state = {
    access_token: Cookies.get('access_token') || '',
    status: '',
    hasLoadedOnce: false,
    errors: new Errors()
}

const getters = {
    isAuthenticated: state => !!state.access_token,
    authStatus: state => state.status,
    authErrors: state => state.errors,
}

const actions = {
    async authRequest({ commit, dispatch }, payload) {
        let actionUrl = '/login';
        let remember = payload.remember ? payload.remember : false;
        let data = {
            'username': payload.username,
            'password': payload.password
        }

        if (payload.action == 'register') {
            actionUrl = '/register';
            data = {
                'name': payload.name,
                'username': payload.username,
                'password': payload.password,
                'password_confirmation': payload.password_confirmation
            }
        }
        if (payload.action == 'password-reset') {
            actionUrl = '/password/reset';
            data = {
                'token': payload.token,
                'username': payload.username,
                'password': payload.password,
                'password_confirmation': payload.password_confirmation
            }
        }

        commit('authRequest');
        try {
            const resp = await axios.post(actionUrl, data);
            if (!resp.data.access_token) {
                commit('authError', {
                    errors: ['Unknown error'],
                });
                return;
            }
            const accessToken = `Bearer ${resp.data.access_token}`;
            Cookies.set('access_token', accessToken, { expires: remember ? 365 : 1 });
            axios.defaults.headers.common['Authorization'] = accessToken;
            commit('authSuccess', accessToken);
            dispatch('userRequest');
            return accessToken;
        } catch (err) {
            commit('authError', err.response.data);
            Cookies.remove('access_token');
        }
    },
    async authLogout({ commit }) {
        Cookies.remove('access_token');
        try {
            await axios.post('/logout');
            commit('authLogout');
        } catch (err) {
            commit('authError', err.response.data);
        }
    }
}

const mutations = {
    authRequest: (state) => {
        state.status = 'loading';
    },
    authSuccess: (state, access_token) => {
        state.status = 'success';
        state.access_token = access_token;
        state.hasLoadedOnce = true;
    },
    authError: (state, err) => {
        let errors = err.errors ? err.errors : {};
        if (err.error == "invalid_grant") {
            errors.invalid_credentials = ['The user credentials were incorrect.'];
        }
        console.log(err);

        state.status = 'error';
        state.hasLoadedOnce = true;
        state.errors.record(errors);
    },
    authLogout: (state) => {
        state.access_token = '';
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}