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

    <Emits @response="(msg) => childMsg = msg"></Emits>
    <p>{{ childMsg }}</p>
    <h4>See detail: <a href="https://vuejs.org/tutorial/#step-13" target="_blank">Emits</a></h4>

    <hr class="divider">

    <h2>Slots</h2>
    <Slots><h4>Examples:</h4> Message in child: {{ msgSlot }}</Slots>
    <h4>See detail: <a href="https://vuejs.org/tutorial/#step-14" target="_blank">Slots</a></h4>

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    align-items: center;
  }
}
</style>
