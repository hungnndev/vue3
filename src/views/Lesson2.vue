<script setup lang="ts">
import ComputedProperty from '@/components/ComputedProperty.vue'
import ListRendering from '@/components/ListRendering.vue'
import ConditionalRendering from '@/components/ConditionalRendering.vue'

</script>

<template>
  <div class="about">
    <ConditionalRendering />
    <ListRendering />
    <ComputedProperty />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    align-items: center;
  }
}
</style>
