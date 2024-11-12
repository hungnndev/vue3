<script setup lang="ts">
import DeclarativeRendering from '@/components/DeclarativeRendering.vue'
import FormBinding from '@/components/FormBinding.vue'

</script>

<template>
  <div class="about">
    <DeclarativeRendering />
    <FormBinding />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    align-items: center;
  }
}
</style>
