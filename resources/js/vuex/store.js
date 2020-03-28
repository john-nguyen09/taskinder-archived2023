import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user'
import auth from './modules/auth'
import taskLog from './modules/taskLog';
import month from './modules/month';
import qa from './modules/qa';
import client from './modules/client';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        user,
        auth,
        taskLog,
        month,
        qa,
        client,
    },
});