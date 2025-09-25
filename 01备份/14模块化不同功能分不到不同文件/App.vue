<template>
  <div class="app">
    <h1>{{ sum }}</h1>
    <button @click="addNum">点我加1</button>
    <button @click="getDog">狗来</button>
    <br />
    <img class="img-item" v-for="(dog, index) in dogList" :key="index" :src="dog" alt="" />
  </div>
</template>

<script setup lang="ts" name="App">
import Person from './components/Person.vue'
import useDog from './hooks/useDog'
import useSum from './hooks/useSum'
const { sum, addNum } = useSum()

const { dogList, getDog } = useDog()
</script>

<style scoped>
button {
  background-color: aqua;
  margin: 10px;
}

.img-item {
  margin: 10px;
  height: 100px;
  flex-shrink: 0;
}

.dog-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
