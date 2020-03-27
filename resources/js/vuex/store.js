import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user'
import auth from './modules/auth'
import taskLog from './modules/taskLog';
import month from './modules/month';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        user,
        auth,
        taskLog,
        month,
    },
});