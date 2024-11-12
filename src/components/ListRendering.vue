<script setup>
import { ref } from 'vue'

// give each todo a unique id
let id = 0

const newTodo = ref('')
const todos = ref([
  { id: id++, text: 'Learn HTML' },
  { id: id++, text: 'Learn JavaScript' },
  { id: id++, text: 'Learn Vue' }
])

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value })
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<template>
  <hr class="divider">
  <h2>List Rendering</h2>
  <ul>
    <li>We can use the <code>v-for</code> directive to render a list of elements based on a source array</li>
    <li>Notice how we are also giving each todo object a unique <code>id</code>, and binding it as the special <code>key</code> attribute for each item. The <code>key</code> allows Vue to accurately move each item to match the position of its corresponding object in the array.</li>
    <li>There are 2 ways to update the list:
      <div>1. Call mutating methods on the source array:
          <code>copyWithin()</code>,
          <code>fill()</code>,
          <code>pop()</code>,
          <code>push()</code>,
          <code>reverse()</code>,
          <code>shift()</code>,
          <code>sort()</code>,
          <code>splice()</code>,
        <code>unshift()</code></div>
      <div>2. Replace the array with a new one: <code>todos.value = todos.value.filter(/* ... */)</code></div>
    </li>
  </ul>
  <h4>Examples:</h4>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" required placeholder="new todo">
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
  <h4>See detail: <a href="https://vuejs.org/tutorial/#step-7" target="_blank">List Rendering</a></h4>

</template>
