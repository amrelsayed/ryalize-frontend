<script setup>
import { useUsersStore } from "@/stores/usersStore";
import { onMounted } from "vue";

const usersStore = useUsersStore();

onMounted(async () => {
  await usersStore.getUsers();
});
</script>

<template>
  <div class="mb-5">
    <div class="row mb-5">
      <div class="col">
        <h2>Users List</h2>
      </div>
      <div class="col text-end">
        <RouterLink to="/users/create" class="btn btn-primary"
          >Add New User</RouterLink
        >
      </div>
    </div>
    <div v-if="usersStore.users && usersStore.users.length > 0">
      <table class="table table-light table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User name</th>
            <th scope="col">Email</th>
            <th scope="col">Transactions Count</th>
            <th scope="col">Created At</th>
            <th scope="col">Updated At</th>
          </tr>
        </thead>
        <tbody v-for="user in usersStore.users" :key="user.id">
          <tr>
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.transactions_count }}</td>
            <td>{{ user.created_at }}</td>
            <td>{{ user.updated_at }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
