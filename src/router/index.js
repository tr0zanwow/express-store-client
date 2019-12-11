import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import AccessLog from '../views/AccessLog.vue'
import ErrorLog from '../views/ErrorLog.vue'
import NavBarLayout from '../components/NavBarLayout.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: NavBarLayout,name:'home',
  beforeEnter: (to, from, next) => {
    if(store.state.isAuthenticated){
      next()
    }
    else{
      next({name: 'login'})
    }
  },
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
