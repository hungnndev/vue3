<template>
  <ul>
    <li>In addition to passing data via <b>props</b>, the parent component can also pass down template fragments to the child via <b>slots</b></li>
    <li>In the child component, it can render the slot content from the parent using the <code>&lt;slot/&gt;</code> element as outlet</li>
    <li>Content inside the <code>&lt;slot&gt;</code> outlet will be treated as "fallback" content: it will be displayed if the parent did not pass down any slot content</li>
  </ul>
  <slot>Fallback content</slot>
</template>
<script setup lang="ts">
</script>
