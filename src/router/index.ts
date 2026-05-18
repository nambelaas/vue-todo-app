import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

export default createRouter({
    routes,
    history: createWebHistory(),
    linkActiveClass: 'font-semibold text-green-600 hover:text-green-500'
})