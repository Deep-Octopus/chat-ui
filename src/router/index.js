import VueRouter from 'vue-router'
import Vue from "vue";
import message from "@/utils/message";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login',
            meta: {
                requiresAuth: false
            },
        },
        {
            path: '/login',
            name: 'login',
            meta: {
                requiresAuth: false
            },
            component: () => import('@/views/LoginPage.vue')
        }, {
            path: '/main',
            name: 'main',
            meta: {
                requiresAuth: false
            },
            component: () => import('@/views/MainPage.vue')
        },
        {
            path: '*',
            name: 'NotFound',
            component: () => import('@/views/404.vue')
        }

    ]
})
router.beforeEach((to, from, next) => {
    const jwtToken = localStorage.getItem('jwtToken');
    if (to.meta.requiresAuth && !jwtToken) {
        // 如果必须身份验证但JWT令牌不存在，则重定向到登录页面
        message.error("请先登录")
        next('/login');
    } else {
        next();
    }
});
export default router
