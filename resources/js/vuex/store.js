import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user'
import auth from './modules/auth'
import taskLog from './modules/taskLog';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        user,
        auth,
        taskLog,
    }
});