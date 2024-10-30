import { defineStore } from "pinia";

export const useUsersStore = defineStore("usersStore", {
  state: () => {
    return {
        users: [],
        errors: {},
      }
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
    async createUser(formData) {
        const res = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        const data = await res.json();

        if (res.ok) {
            this.errors = {}
            this.router.push('/users')
        } else if (data.errors) {
            this.errors = data.errors
        }
    },
  },
});