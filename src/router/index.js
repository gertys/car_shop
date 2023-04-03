import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Pagelogin from '../views/Pagelogin.vue'
import PageRegister from '../views/PageRegister.vue'
import SearchView from "../views/SearchView.vue"
import CartView from '../views/CartView.vue'
import ProductView from "../views/ProductView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Pagelogin,
    },
    {
      path: '/register',
      name: 'register',
      component: PageRegister,
    },
    { 
      name: 'search',
      path: '/search/:name', 
      component: SearchView, 
    },
    {
      name: 'cart',
      path: '/cart',
      component: CartView,
    },
    {
      name: 'product',
      path: "/product/:id",
      component: ProductView,
    },
  ]
})

export default router
