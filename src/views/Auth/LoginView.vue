<script setup>
import { useAuthStore } from "@/stores/authStore";
import { reactive } from "vue";

const authStore = useAuthStore();

const formData = reactive({
  email: "",
  password: "",
});
</script>

<template>
  <div class="form-signin">
    <form @submit.prevent="authStore.login(formData)">
      <h1 class="h3 mb-3 fw-normal">Please Login</h1>

      <div class="form-floating">
        <input
          v-model="formData.email"
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
        <p class="text-danger" v-if="authStore.errors.email">
          {{ authStore.errors.email[0] }}
        </p>
      </div>
      <div class="form-floating">
        <input
          v-model="formData.password"
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>

        <p class="text-danger" v-if="authStore.errors.password">
          {{ authStore.errors.password[0] }}
        </p>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
  margin-top: 30px;
}
</style>
