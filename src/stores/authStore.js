import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
    state: () => {
        return {
            user: null,
            errors: {}
        }
    },
    getters: {},
    actions: {
        async login(formData) {
            const res = await fetch('/api/login', {
                method: 'POST',
                body: JSON.stringify(formData)
            })

            const data = await res.json();

            if (res.ok) {
                this.errors = {}
                localStorage.setItem('token', data.token);
                this.user = data.user
                this.router.push('/')
            } else if (data.errors) {
                this.errors = data.errors
            }
        },

        async logout() {
            const res = await fetch('/api/logout', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })

            const data = await res.json();

            console.log(data);

            if (res.ok) {
                this.user = null
                this.errors = {}
                localStorage.removeItem('token');
                this.router.push('/')
            }
        },
    }
})