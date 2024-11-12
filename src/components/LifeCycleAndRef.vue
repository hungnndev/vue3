<script setup>
import { ref, onMounted } from 'vue'

const pElementRef = ref(null)

onMounted(() => {
  pElementRef.value.textContent = 'mounted!'
})
</script>

<template>
  <hr class="divider">
  <h2>Life Cycle and Refs</h2>
  <div>Life cycle allows us to register a callback to be called at certain times of the component's lifecycle.</div>
  <ul>
    <li><code>onMounted()</code> Registers a callback to be called after the component has been mounted.</li>
    <li><code>onUpdated()</code> Registers a callback to be called after the component has updated its DOM tree due to a reactive state change.</li>
    <li><code>onUnmounted()</code> Registers a callback to be called after the component has been unmounted.</li>
    <li><code>onBeforeMount()</code> Registers a hook to be called right before the component is to be mounted.</li>
    <li><code>onBeforeUpdate()</code> Registers a hook to be called right before the component is about to update its DOM tree due to a reactive state change.</li>
    <li><code>onBeforeUnmount()</code> Registers a hook to be called right before a component instance is to be unmounted.</li>
    <li><code>onErrorCaptured()</code> Registers a hook to be called when an error propagating from a descendant component has been captured.</li>
    <li><code>onRenderTracked()</code>(dev only) Registers a debug hook to be called when a reactive dependency has been tracked by the component's render effect.</li>
    <li><code>onRenderTriggered()</code>(dev only) Registers a debug hook to be called when a reactive dependency triggers the component's render effect to be re-run.</li>
    <li><code>onActivated()</code> Registers a callback to be called after the component instance is inserted into the DOM as part of a tree cached by <code>KeepAlive</code>.</li>
    <li><code>onDeactivated()</code> Registers a callback to be called after the component instance is removed from the DOM as part of a tree cached by <code>KeepAlive</code>.</li>
    <li><code>onServerPrefetch()</code>(SSR only) Registers an async function to be resolved before the component instance is to be rendered on the server.</li>
  </ul>
  <h4>Examples:</h4>
  <p ref="pElementRef">Hello</p>
  <h4>See detail: <a href="https://vuejs.org/tutorial/#step-9" target="_blank">Lifecycle and Template Refs</a></h4>

</template>
