import { store } from '../vuex/store';

const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters.isAuthenticated) {
        next();
        return;
    }
    next('/');
};

const ifAuthenticated = (to, from, next) => {
    if (store.getters.isAuthenticated) {
        next();
        return;
    }
    next('/login');
};

export const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../components/auth/login'),
        beforeEnter: ifNotAuthenticated,
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../components/auth/register'),
        beforeEnter: ifNotAuthenticated,
    },
    {
        path: '/password/reset/',
        name: 'password-email',
        component: () => import('../components/auth/password/email'),
        beforeEnter: ifNotAuthenticated,
    },
    {
        path: '/password/reset/:token',
        name: 'password-reset',
        component: () => import('../components/auth/password/reset'),
        beforeEnter: ifNotAuthenticated,
    },
    {
        path: '',
        component: () => import('../components/layout/layout'),
        beforeEnter: ifAuthenticated,
        children: [
            {
                path: '/',
                name: 'dashboard',
                component: () => import('../components/dashboard')
            },
            {
                path: '/manage-passport',
                name: 'manage-passport',
                component: () => import('../components/manage_passport')
            },

            {
                path: '/client',
                name: 'clientDashboard',
                component: () => import('../components/client'),
            },
            {
                path: '/qa',
                name: 'qaDashboard',
                component: () => import('../components/qa'),
            },
        ]
    },
];
