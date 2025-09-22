<template>
  <div>
    <div class="car">
      <h2>品牌：{{ benchi.name }}</h2>
      <h2>价格：{{ benchi.price }}</h2>
    </div>

    <ul>
      <li v-for="game in games" :key="game.id">
        {{ game.name }}
      </li>
    </ul>
    <button @click="changePrice">加价</button>
  </div>
</template>

<script setup name="Car" lang="ts">
import { reactive, ref } from 'vue'

let price = ref()

let benchi = reactive({ name: 'benchi', price: 1000 })

let games = reactive([
  {
    name: 'csgo',
    id: 1,
  },
  {
    name: 'dota2',
    id: 2,
  },
  {
    name: 'lol',
    id: 3,
  },
])

console.log(benchi)
function changePrice() {
  benchi.price += 100
}
</script>

<style scoped>
.car {
  background-color: azure;
  padding: 10px;
}
</style>
