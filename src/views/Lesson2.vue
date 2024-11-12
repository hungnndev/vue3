<script setup lang="ts">
import Watchers from '@/components/Watchers.vue'
import ComputedProperty from '@/components/ComputedProperty.vue'
import ListRendering from '@/components/ListRendering.vue'
import LifeCycleAndRef from '@/components/LifeCycleAndRef.vue'
import ConditionalRendering from '@/components/ConditionalRendering.vue'

</script>

<template>
  <div class="about">
    <ConditionalRendering />
    <ListRendering />
    <ComputedProperty />
    <LifeCycleAndRef />
    <Watchers />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    align-items: center;
  }
}
</style>
