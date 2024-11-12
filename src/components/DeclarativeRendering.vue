<script setup>
import { ref } from 'vue'

const count = ref(0)
const reactiveProp = ref('<code>reactive()</code>')

function increment() {
  count.value++
}
</script>

<template>
  <h2>Declarative View</h2>
  <ul>
    <li><p>The core feature of Vue is <b>declarative rendering</b>: using a template syntax that extends HTML, we can describe how the HTML should look based on JavaScript state. When the state changes, the HTML updates automatically.</p></li>
    <li>State that can trigger updates when changed is considered <b>reactive</b>. We can declare reactive state using Vue's <span v-html="reactiveProp"></span> API. Objects created from <span v-html="reactiveProp"></span> are JavaScript Proxies that work just like normal objects</li>
    <li><span v-html="reactiveProp"></span> only works on objects (including arrays and built-in types like <code>Map</code> and <code>Set</code>).</li>
    <li><code>ref()</code>, on the other hand, can take any value type and create an object that exposes the inner value under a <code>.value</code> property:</li>
    <li><ul><code>ref</code> vs <code>reactive</code>
      <li>Use <code>ref()</code> for <strong>single values</strong> (e.g., a string, number, or boolean).</li>
      <li>Use <code>reactive()</code> for <strong>objects and arrays</strong>, especially when you have nested properties.</li>
    </ul></li>
  </ul>
  <h4>See detail: <a href="https://vuejs.org/tutorial/#step-2" target="_blank">Declarative Rendering</a></h4>

  <hr class="divider">

  <h2>Attribute Bindings</h2>
  <ul>
    <li>In Vue, mustaches are only used for text interpolation. To bind an attribute to a dynamic value, we use the <code>v-bind</code> directive: <code>&lt;div v-bind:id="dynamicId"&gt;&lt;/div&gt;</code></li>
  </ul>
  <div><b>Shorthand:</b> <code>&lt;div :id="dynamicId"&gt;&lt;/div&gt;</code></div>
  <h4>See detail: <a href="https://vuejs.org/tutorial/#step-3" target="_blank">Attribute Bindings</a></h4>

  <hr class="divider">

  <h2>Event Listeners</h2>
  <ul>
    <li>We can listen to DOM events using the <code>v-on</code> directive: <code>&lt;button v-on:click="increment"&gt;&#123;&#123; count &#125;&#125;&lt;/button&gt;</code></li>
  </ul>
  <div><b>Shorthand:</b> <code>&lt;button v-on:click="increment"&gt;&#123;&#123; count &#125;&#125;&lt;/button&gt;</code></div>
  <h4>Examples:</h4>
  <button @click="increment">Count is: {{ count }}</button>
  <h4>See detail: <a href="https://vuejs.org/tutorial/#step-4" target="_blank">Event Listeners</a></h4>

</template>
