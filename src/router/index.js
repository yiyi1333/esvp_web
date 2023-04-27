import {createRouter, createWebHashHistory} from 'vue-router';
import Index from '~/pages/index.vue'
import NotFound from '~/pages/404.vue'
import Login from '~/pages/login.vue'
import Register from '~/pages/register.vue'
import Verificationcenter from '@/pages/verificationcenter.vue'
import AppLayout from "@/layout/AppLayout.vue";
import modelpage from "@/components/main/modelpage.vue";
import Page1 from "@/components/main/Page1.vue";
import Authentication from "@/pages/authentication.vue";
import Personcenter from "@/pages/personcenter.vue";
import home from "@/components/main/home.vue";

const routers = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    // {
    //     path: '/app',
    //     name: 'AppLayout',
    //     component: AppLayout,
    //     redirect: '/1',
    //     children: [
    //         {
    //             path: '/1',
    //             name: '1',
    //             component: modelpage
    //         },
    //         {
    //             path: '/2-1',
    //             name: '2-1',
    //             component: Page1
    //         },
    //     ]
    // },
    {
        path: '/Verificationcenter',
        name: 'Verificationcenter',
        component: Verificationcenter
    },
    {
        path: '/personcenter',
        name: 'Personcenter',
        component: Personcenter,
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: home
            }
        ]
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
        path: '/authentication',
        name: 'Authentication',
        component: Authentication
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