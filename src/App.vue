<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useAuthStore } from "./stores/authStore";

const authStore = useAuthStore();
</script>

<template>
  <header class="p-3 bg-dark text-white">
    <div class="container">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
      >
        <ul
          class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
        >
          <li>
            <RouterLink to="/" class="nav-link px-2 text-white"
              >Home</RouterLink
            >
          </li>
          <li v-if="authStore.user">
            <RouterLink to="/transactions" class="nav-link px-2 text-white"
              >Transactions</RouterLink
            >
          </li>
          <li v-if="authStore.user">
            <RouterLink to="/users" class="nav-link px-2 text-white"
              >Users</RouterLink
            >
          </li>
        </ul>

        <div v-if="!authStore.user" class="text-end">
          <RouterLink to="/login" class="btn btn-outline-light me-2"
            >Login</RouterLink
          >
        </div>

        <div v-if="authStore.user" class="text-end">
          <form @submit.prevent="authStore.logout">
            <button class="btn btn-outline-light me-2">Logout</button>
          </form>
        </div>
      </div>
    </div>
  </header>
  <div class="container mt-5">
    <RouterView />
  </div>
</template>
