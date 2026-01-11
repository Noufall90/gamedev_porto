import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../components/main-page.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "main-page",
            component: MainPage
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    }
})

export default router;