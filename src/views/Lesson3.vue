<script setup lang="ts">
import Watchers from '@/components/Watchers.vue'
import LifeCycleAndRef from '@/components/LifeCycleAndRef.vue'

</script>

<template>
  <div class="about">
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
