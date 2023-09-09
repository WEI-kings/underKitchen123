import { createRouter, createWebHistory } from 'vue-router'
import JWlogin from '../views/JWlogin.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '',component: JWlogin},
    {path: '/login',component: JWlogin},
    //懒加载方式
    {path: '/register',component:()=>import('../views/JWregister.vue')},
    {path: '/control',component:()=>import('../views/JWcontrol.vue')}
  ]
})

export default router
