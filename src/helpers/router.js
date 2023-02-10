import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue';
import PageNotFound from '../views/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Dashboard',
            path: '/',
            component: () => import('../views/Dashboard.vue')
        },
        {
            name: 'Login',
            path: '/login',
            component: Login,
        },
        {
            name: 'Positions',
            path: '/positions',
            component: () => import('../views/Positions.vue'),
        },
        {
            name: 'Employees',
            path: '/employees',
            component: () => import('../views/Employees.vue'),
        },
        {
            name: 'Sallarys',
            path: '/sallarys',
            component: () => import('../views/Sallarys.vue'),
        },
        {
            path: '/:pathMatch(.*)*',
            component: PageNotFound
        }
    ],
})

router.beforeEach((to, from, next) => {
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    if(loggedIn && !authRequired) {
        next('/')
    }
    
    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
        next('/login');
    } else {
        next();
    }
});

export default router;