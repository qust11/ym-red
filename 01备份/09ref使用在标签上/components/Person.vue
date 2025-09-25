<template>
  <div class="person">
    <h1>标签的ref属性</h1>
    <h2 ref="title2">person的h2标签</h2>
    <br />
    <button @click="showTitle">点我展示person的标签</button>
  </div>
</template>

<script setup name="Person" lang="ts">
import { ref } from 'vue'

let title2 = ref()
function showTitle() {
  console.log('person 的标签', title2.value)
}
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
