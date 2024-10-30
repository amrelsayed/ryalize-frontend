import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/Auth/LoginView.vue'
import TransactionsView from '@/views/TransactionsView.vue'
import ListUsersView from '@/views/Users/ListUsersView.vue'
import CreateUserView from '@/views/Users/CreateUserView.vue'
import UpdateUserView from '@/views/Users/UpdateUserView.vue'
import { useAuthStore } from '@/stores/authStore'

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
      component: LoginView,
      meta: { guest: true },
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: TransactionsView,
      meta: { auth: true },
    },
    {
      path: '/users',
      name: 'users',
      component: ListUsersView,
      meta: { auth: true },
    },
    {
      path: '/users/create',
      name: 'users.create',
      component: CreateUserView,
      meta: { auth: true },
    },
    {
      path: '/users/update/:id',
      name: 'users.update',
      component: UpdateUserView,
      meta: { auth: true },
    },
  ]
})

router.beforeEach(async (to, from) => {
  const authStore = useAuthStore();
  await authStore.getUser();

  if (authStore.user && to.meta.guest) {
    return { name: "home" };
  }

  if (!authStore.user && to.meta.auth) {
    return { name: "login" };
  }
});

export default router
