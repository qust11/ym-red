<template>
  <div class="app">
    <h2 ref="title2">APP VUE的h2标签</h2>
    <br />
    <button @click="showTitle">点我展示app vue的标签</button>
    <Person />
  </div>
</template>

<script setup lang="ts" name="App">
// 不过h2中的标签不使用ref 而是使用id 如果子类中也存在相同的id 就回导致父类会覆盖子类，比如都是获取id=title2的标签，则无论是在子类中获取还是父类中获取，获取的都是父类中的id=title2的dom元素

import { ref } from 'vue'
import Person from './components/Person.vue'
let title2 = ref()
function showTitle() {
  console.log('app vue中的标签 === ', title2.value)
}
</script>

<style scoped>
button {
  background-color: aqua;
  margin: 10px;
}
</style>
