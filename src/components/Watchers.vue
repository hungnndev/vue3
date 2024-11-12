<script setup>
import { ref, watch } from 'vue'

const todoId = ref(1)
const todoData = ref(null)

async function fetchData() {
  todoData.value = null
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  todoData.value = await res.json()
}

fetchData()

watch(todoId, fetchData)
</script>

<template>
  <hr class="divider">
  <h2>Watchers</h2>
  <ul>
    <li><code>watch()</code> can directly watch a ref, and the callback gets fired whenever value changes. <code>watch()</code> can also watch other types of data sources</li>
  </ul>
  <h4>Examples:</h4>
  <p>Todo id: {{ todoId }}</p>
  <button @click="todoId++" :disabled="!todoData">Fetch next todo</button>
  <p v-if="!todoData">Loading...</p>
  <pre v-else>{{ todoData }}</pre>
  <h4>See detail: <a href="https://vuejs.org/tutorial/#step-10" target="_blank">Watchers</a></h4>

</template>
