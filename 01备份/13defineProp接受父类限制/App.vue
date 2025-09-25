<template>
  <div class="app">
    <!-- <Person a="hahah" :personList="personList" /> -->
    <Person :personList="personList" />
  </div>
</template>

<script setup lang="ts" name="App">
import Person from './components/Person.vue'
import { reactive } from 'vue'
import { type PersonInter } from '@/types/pppp'

let personList = reactive<PersonInter[]>([
  {
    id: '1',
    name: '张三',
    age: 18,
  },
  {
    id: '2',
    name: '李四李四',
    age: 22,
  },
])
</script>

<style scoped>
button {
  background-color: aqua;
  margin: 10px;
}
</style>
