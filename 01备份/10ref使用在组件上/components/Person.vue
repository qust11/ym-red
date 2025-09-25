<template>
  <div class="person">
    <h1>组件的ref属性</h1>
    <br />
  </div>
</template>

<script setup name="Person" lang="ts">
import { ref, defineExpose } from 'vue'

let a = ref(0)
let b = ref(1)
let c = ref(2)
defineExpose({
  a,
  b,
  c,
})
</script>

<style scoped>
.person {
  background-color: azure;
  padding: 10px;
}

button {
  margin: 10px;
}
</style>
