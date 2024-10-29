import { defineStore } from "pinia";

export const useTransactionsStore = defineStore("transactionsStore", {
  state: () => {
    transactions: []
  },
  actions: {
    async getTransactions(params = {}) {
      const query = new URLSearchParams(params).toString();
      
      const res = await fetch(`/api/transactions?${query}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await res.json();
      this.transactions = data.data;
      return this.transactions;
    },
  },
});