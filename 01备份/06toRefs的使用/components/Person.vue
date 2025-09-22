<template>
  <div class="person">
      <h1>姓名：{{name}}</h1>
      <p>年龄:{{age}}</p>
    <button @click="ageAdd">年龄+1</button>
    <button @click="nameChange">姓名改为Juan</button>
    <button @click="nameChange2">姓名改为Jua2n</button>
</div>
</template>

<script setup name="Person" lang="ts">
import { ref, toRefs,reactive } from 'vue'

let person = reactive({'name': 'Juan','age': 23,'city': 'Mexico'})
let {name, age, city} = toRefs(person)

function ageAdd() {
  console.log(age)
  age.value += 1
}

function nameChange() {
  name.value += '~'
  // 解构的name和person.name是同一个对象 修改name.value也会修改person.name
  console.log(name.value,person.name)
}

function nameChange2() {
  person.name += '~'
  // 解构的name和person.name是同一个对象 修改name.value也会修改person.name(反过来也同样生效)
  console.log(name.value,person.name)
}

</script>

<style scoped>
.person {
  background-color: azure;
  padding: 10px;
}

button{
  margin: 10px;
}
</style>
