<script setup>
const emit = defineEmits(['response'])

emit('response', 'hello from child')
</script>

<template>
  <ul>
    <li>To emit events to the parent</li>
    <li>The first argument to <code>emit()</code> is the event name. Any additional arguments are passed on to the event listener.</li>
    <li>The parent can listen to child-emitted events using <code>v-on</code> is the event name. Any additional arguments are passed on to the event listener.</li>
  </ul>
  <h4>Child component</h4>
</template>
