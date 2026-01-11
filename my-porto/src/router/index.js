import { createRouter, createWebHistory } from "vue-router";
import Main from '../views/main.vue'
import MainPage from '../components/main-page.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // USER ROUTES
        {
            path: '/main-page',
            name: 'main-page',
            component: MainPage
        },
        {
            path: '/',
            name: 'main',
            component: Main
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    }
})

export default router;