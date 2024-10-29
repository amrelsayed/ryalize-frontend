import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/Auth/LoginView.vue'
import TransactionsView from '@/views/TransactionsView.vue'
import ListUsersView from '@/views/Users/ListUsersView.vue'
import CreateUserView from '@/views/Users/CreateUserView.vue'
import UpdateUserView from '@/views/Users/UpdateUserView.vue'

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
      component: LoginView
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: TransactionsView
    },
    {
      path: '/users',
      name: 'users',
      component: ListUsersView
    },
    {
      path: '/users/create',
      name: 'users.create',
      component: CreateUserView
    },
    {
      path: '/users/update/:id',
      name: 'users.update',
      component: UpdateUserView
    },
  ]
})

export default router
