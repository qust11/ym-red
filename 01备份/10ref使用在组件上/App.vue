<template>
  <div class="app">
    <h2 ref="title2">APP VUE的子类组件实例</h2>
    <br />
    <button @click="showMe">点我展示子组件信息</button>
    <Person ref="ppson" />
  </div>
</template>

<script setup lang="ts" name="App">
// 如果加在组件上 则是获取子类的组件实例，如果想要获取子类组件的数据，则需要子类通过defineExpose()方法暴露数据
import { ref } from 'vue'
import Person from './components/Person.vue'

// 获取子类暴漏的数据

let ppson = ref()
function showMe() {
  console.log('父组件的标签', ppson.value.b)
}
</script>

<style scoped>
button {
  background-color: aqua;
  margin: 10px;
}
</style>
