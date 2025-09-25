<template>
  <div class="person">
    <h1>watch第二4种情况。监视ref对象数据</h1>
    <div>
      <p>name: {{ person.name }}</p>
      <button @click="changeName">修改name</button>
      <p>age: {{ person.age }}</p>
      <button @click="ageAdd">修改age</button>
    </div>
  </div>
</template>

<script setup name="Person" lang="ts">
import { ref, watch } from 'vue'
let person = ref({
  name: '张三',
  age: 18,
})

function changeName() {
  person.value.name += '~'
}

function ageAdd() {
  person.value.age++
}

// watch(
//   () => person.value.age,
//   (newValue, oldValue) => {
//     console.log(newValue, oldValue)
//   },
// )

// 如果想要监视对象需要在可选参数中添加 deep：true 表明深度监视
watch(
  person,
  (newValue, oldValue) => {
    console.log(newValue, oldValue)
  },
  {
    deep: true,
  },
)
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
