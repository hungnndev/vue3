<script setup>
import { ref } from 'vue'

const awesome = ref(true)

function toggle() {
  awesome.value = !awesome.value
}
</script>

<template>
  <h2>Conditional Rendering</h2>
  <ul>
    <li>We can use the <code>v-if</code> directive to conditionally render an element</li>
    <li>We can also use <code>v-else</code> and <code>v-else-if</code> to denote other branches of the condition:</li>
  </ul>
  <h4>Examples:</h4>
  <button @click="toggle">Toggle</button>
  <h3 v-if="awesome">Vue is awesome!</h3>
  <h3 v-else>Oh no 😢</h3>
  <h4>See detail: <a href="https://vuejs.org/tutorial/#step-6" target="_blank">Conditional Rendering</a></h4>

</template>
