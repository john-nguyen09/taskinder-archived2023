/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';

import { routes } from './router/routes';
import { store } from './vuex/store';

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
});

Vue.component('navbar', () => import('./components/layout/navbar.vue'));

const app = new Vue({
    el: '#app',
    created() {
        if (this.$store.getters.isAuthenticated) {
            this.$store.dispatch('userRequest');
        }
    },
    store,
    router,
});
