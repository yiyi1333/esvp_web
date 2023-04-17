import {createRouter, createWebHashHistory} from 'vue-router';
import Index from '~/pages/index.vue'
import NotFound from '~/pages/404.vue'
import Login from '~/pages/login.vue'
import Register from '~/pages/register.vue'
import verificationcenter from '~/pages/verificationcenter.vue'
import AppLayout from "@/layout/AppLayout.vue";
const routers = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/app',
        name: 'AppLayout',
        component: AppLayout
    },
    {
        path: '/verify',
        name: 'verificationcenter',
        component: verificationcenter
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routers
})
export default router