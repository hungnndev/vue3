<script setup>
import { ref } from 'vue'

const text = ref('')
</script>

<template>
  <h2>Form Binding</h2>
  <input v-model="text" placeholder="Type here">
  <p>{{ text }}</p>
</template>
