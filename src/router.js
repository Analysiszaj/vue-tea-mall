import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('./views/List.vue'),
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('./views/Cart.vue'),
    },
    {
      path: '/my',
      name: 'My',
      component: () => import('./views/My.vue'),
    },
  ],
})
