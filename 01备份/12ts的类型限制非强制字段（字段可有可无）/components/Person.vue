<template>
  <div class="person">??</div>
</template>

<script setup name="Person" lang="ts">
import { type PersonInter } from '@/types/pppp'
import { ref } from 'vue'

let person: PersonInter = {
  id: '1',
  name: '张三',
  age: 18,
}

let personList = ref<PersonInter[]>([
  {
    id: '1',
    name: '张三',
    age: 18,
  },
  {
    id: '2',
    name: '张三',
    age: 18,
  },
  {
    id: '2',
    name: '张三',
    age: 18,
    x: 1,
  },
])
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
