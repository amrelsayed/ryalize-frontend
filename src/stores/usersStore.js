import { defineStore } from "pinia";

export const useUsersStore = defineStore("usersStore", {
  state: () => {
    users: []
  },
  actions: {
    async getUsers() {
      
      const res = await fetch(`/api/users?`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      const data = await res.json();
      this.users = data.data;
      
      return this.users;
    },
  },
});