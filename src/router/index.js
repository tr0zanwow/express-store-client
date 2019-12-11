import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import AccessLog from '../views/AccessLog.vue'
import ErrorLog from '../views/ErrorLog.vue'
import NavBarLayout from '../components/NavBarLayout.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: NavBarLayout,
      children: [
        {
          path: '/accessLog',
          name: 'accessLog',
          component: AccessLog
        },
        {
          path: '/errorLog',
          name: 'errorLog',
          component: ErrorLog
        }
      ]}, 
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
