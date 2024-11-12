<script setup>
import { ref } from 'vue'

const text = ref('')
</script>

<template>
  <hr class="divider">
  <h2>Form Binding</h2>
  <ul>
    <li>Using <code>v-bind</code> and <code>v-on</code> together, we can create two-way bindings on form input elements:</li>
    <li>To simplify two-way bindings, Vue provides a directive, <code>v-model</code>, which is essentially syntactic sugar for the above: <code>&lt;input v-model="text"&gt;</code></li>
    <li><code>v-model</code> works not only on text inputs, but also on other input types such as checkboxes, radio buttons, and select dropdowns. </li>
  </ul>
  <h4>Examples:</h4>
  <input v-model="text" placeholder="Type here">
  <p>{{ text }}</p>
</template>
