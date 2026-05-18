import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
    routes,
    history: createWebHistory(),
    linkActiveClass: 'font-semibold text-green-600 hover:text-green-500'
})

router.beforeEach((to, from) => {
    console.log('Global before each', to, from)

    if (to.path === '/tasks' || to.path === '/summary') {
        return { name: 'Login' }
    }

})

export default router