<script setup lang="ts">
import { ref } from 'vue'
import Props from '@/components/Props.vue'
import Emits from '@/components/Emits.vue'
import Slots from '@/components/Slots.vue'

const childMsg = ref('No child msg yet')
const msgSlot = ref('from parent')
</script>

<template>
  <div class="about">
    <Props msg="Data from parent"></Props>

    <hr class="divider">

    <h2>Emits</h2>
    <Emits @response="(msg) => childMsg = msg"></Emits>
    <p>{{ childMsg }}</p>

    <hr class="divider">
    <h2>Slots</h2>
    <Slots>Message in child: {{ msgSlot }}</Slots>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    align-items: center;
  }
}
</style>
