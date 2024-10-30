<script setup>
import { useTransactionsStore } from "@/stores/transactionsStore";
import { onMounted, reactive, watch } from "vue";

const transactionsStore = useTransactionsStore();

const params = reactive({
  amount_from: "",
  amount_to: "",
  date_from: "",
  date_to: "",
});

onMounted(async () => {
  await transactionsStore.getTransactions();
});

const fetchTransactions = async () => {
  await transactionsStore.getTransactions(params);
};

watch(params, fetchTransactions, { deep: true });
</script>

<template>
  <div class="mb-5">
    <h2 class="mb-5">Transactions List</h2>

    <div class="row">
      <div class="col-auto">
        <label>Amount From: </label>
      </div>
      <div class="col-auto">
        <input
          v-model="params.amount_from"
          type="text"
          class="form-control w-100"
        />
      </div>
      <div class="col-auto">
        <label>Amount To: </label>
      </div>
      <div class="col-auto">
        <input
          v-model="params.amount_to"
          type="text"
          class="form-control w-100"
        />
      </div>
      <div class="col-auto">
        <label>Date From: </label>
      </div>
      <div class="col-auto">
        <input v-model="params.date_from" type="date" class="form-control" />
      </div>
      <div class="col-auto">
        <label>Date To: </label>
      </div>
      <div class="col-auto">
        <input v-model="params.date_to" type="date" class="form-control" />
      </div>
    </div>
  </div>
  <div
    v-if="
      transactionsStore.transactions &&
      transactionsStore.transactions.length > 0
    "
  >
    <table class="table table-light table-striped-columns">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">User name</th>
          <th scope="col">Location ID - name</th>
          <th scope="col">Amount</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody
        v-for="transaction in transactionsStore.transactions"
        :key="transaction.id"
      >
        <tr>
          <th scope="row">{{ transaction.id }}</th>
          <td>{{ transaction.user.name }}</td>
          <td>
            {{ transaction.location.id }} - {{ transaction.location.name }}
          </td>
          <td>{{ transaction.amount }}</td>
          <td>{{ transaction.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <h3>No transactions found</h3>
  </div>
</template>

<style scoped>
.w-100 {
  max-width: 100px;
}
</style>
