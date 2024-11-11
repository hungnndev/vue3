<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <h2>Declarative View</h2>
  <button @click="increment">Count is: {{ count }}</button>
</template>
