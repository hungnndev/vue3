<script setup lang="ts">
import DeclarativeRendering from '@/components/DeclarativeRendering.vue'
import FormBinding from '@/components/FormBinding.vue'
import ConditionalRendering from '@/components/ConditionalRendering.vue'
import ListRendering from '@/components/ListRendering.vue'
import ComputedProperty from '@/components/ComputedProperty.vue'
import LifeCycleAndRef from '@/components/LifeCycleAndRef.vue'
import Watchers from '@/components/Watchers.vue'

</script>

<template>
  <div class="about">
    <DeclarativeRendering />
    <FormBinding />
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
