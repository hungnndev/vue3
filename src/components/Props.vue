<script setup>
defineProps({
  msg: String
})
</script>

<template>
  <h2>Props</h2>
  <ul>
    <li>A child component can accept input from the parent via <b>props</b>. First, it needs to declare the props it accepts:</li>
    <li>Note <code>defineProps()</code> is a compile-time macro and doesn't need to be imported.</li>
    <li>The parent can pass the prop to the child just like attributes. To pass a dynamic value, we can also use the <code>v-bind</code></li>
  </ul>
  <h4>Examples:</h4>
  <span>{{ msg || 'No props passed yet' }}</span>
  <h4>See detail: <a href="https://vuejs.org/tutorial/#step-12" target="_blank">Props</a></h4>

</template>
