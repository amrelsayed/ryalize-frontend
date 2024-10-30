<script setup>
import { useUsersStore } from "@/stores/usersStore";
import { reactive } from "vue";

const usersStore = useUsersStore();

const formData = reactive({
  name: "",
  email: "",
  password: "",
});
</script>

<template>
  <div>
    <h2>Add New User</h2>
    <div class="row">
      <div class="col-md-6">
        <form @submit.prevent="usersStore.createUser(formData)">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input
              v-model="formData.name"
              type="name"
              class="form-control"
              id="name"
            />
            <p class="text-danger" v-if="usersStore.errors.name">
              {{ usersStore.errors.name[0] }}
            </p>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input
              v-model="formData.email"
              type="email"
              class="form-control"
              id="email"
            />
            <p class="text-danger" v-if="usersStore.errors.email">
              {{ usersStore.errors.email[0] }}
            </p>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              v-model="formData.password"
              type="password"
              class="form-control"
              id="password"
            />
            <p class="text-danger" v-if="usersStore.errors.password">
              {{ usersStore.errors.password[0] }}
            </p>
          </div>

          <button type="submit" class="btn btn-primary">Save</button>
        </form>
      </div>
      <div class="col-md-6"></div>
    </div>
  </div>
</template>
