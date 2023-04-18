import {createRouter, createWebHashHistory} from 'vue-router';
import Index from '~/pages/index.vue'
import NotFound from '~/pages/404.vue'
import Login from '~/pages/login.vue'
import Register from '~/pages/register.vue'
import verificationcenter from '~/pages/verificationcenter.vue'
import AppLayout from "@/layout/AppLayout.vue";
import modelpage from "@/components/main/modelpage.vue";
import Page1 from "@/components/main/Page1.vue";

const routers = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/app',
        name: 'AppLayout',
        component: AppLayout,
        redirect: '/demo',
        children: [
            {
                path: '/demo',
                name: 'Demo',
                component: modelpage
            },
            {
                path: '/page1',
                name: 'Page1',
                component: Page1
            },
        ]
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