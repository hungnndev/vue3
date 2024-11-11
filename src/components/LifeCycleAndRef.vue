<script setup>
import { ref, onMounted } from 'vue'

const pElementRef = ref(null)

onMounted(() => {
  pElementRef.value.textContent = 'mounted!'
})
</script>

<template>
  <h2>Life Cycle and Refs</h2>
  <p ref="pElementRef">Hello</p>
</template>
