import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import catalogView from "@/views/CatalogView.vue";
import authView from "@/views/AuthView.vue";
import ProductView from "@/views/ProductView.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/catalog',
        name: 'catalog',
        component: catalogView
    },
    {
        path: '/auth',
        name: 'auth',
        component: authView
    },
    {
        path: '/product',
        name: 'product',
        component: ProductView
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
