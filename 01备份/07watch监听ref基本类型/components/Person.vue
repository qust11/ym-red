<template>
  <div class="person">
    <h1>watch第一种情况。监事基本类型数据</h1>
    <div>
      <p>name: {{ name }}</p>
      <button @click="changeName">修改name</button>
      <p>age: {{ age }}</p>
      <button @click="ageAdd">修改age</button>
    </div>
  </div>
</template>

<script setup name="Person" lang="ts">
import { ref, watch } from 'vue'

let name = ref('张三')
let age = ref(18)

function changeName() {
  name.value += '~~'
}

function ageAdd() {
  age.value += 1
}

let nameWatch = watch(name, (newValue, oldValue) => {
  console.log('name发生变化:', newValue, oldValue)
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
