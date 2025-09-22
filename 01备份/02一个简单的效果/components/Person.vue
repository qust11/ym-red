<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="shouSex">展示年龄</button>
    <button @click="addAge">年龄+1</button>
    <button @click="changeName">修改名字</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let name = ref('张三')
let age = ref(18)
let sex = ref('男')
function shouSex() {
  alert(sex.value)
}

function addAge() {
  age.value++
}

function changeName() {
  name.value = '王五'
}
</script>

<style scoped>
button {
  margin: 10px;
}
</style>
