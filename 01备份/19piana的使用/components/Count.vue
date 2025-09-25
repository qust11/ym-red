<template>
  <div class="count-div">
    <h2>当前数据为：{{ countNum }}</h2>
    <select v-model.number="val">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">++</button>
    <button @click="subs">--</button>
  </div>
</template>

<script setup lang="ts" name="Count">
import { ref } from 'vue'
import { useCountStore } from '@/store/Count'
import { storeToRefs } from 'pinia'

let {countNum} = storeToRefs(useCountStore())

let val = ref(1)

function add() {
  countNum.value += val.value
}
function subs() {
  countNum.value -= val.value
}
</script>

<style scoped>
.count-div {
  background-color: aquamarine;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.count-div h2 {
  margin-bottom: 20px;
}

.count-div select {
  padding: 8px 12px;
  font-size: 16px;
  border: 2px solid #4caf50;
  border-radius: 6px;
  background-color: white;
  color: #333;
  outline: none;
  transition: all 0.3s ease;
  margin: 0 10px;
}

.count-div select:hover {
  border-color: #45a049;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.3);
}

.count-div select:focus {
  border-color: #2e7d32;
  box-shadow: 0 0 8px rgba(46, 125, 50, 0.5);
}

button {
  margin: 10px;
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:first-of-type {
  background-color: #4caf50;
  color: white;
}

button:first-of-type:hover {
  background-color: #45a049;
}

button:last-of-type {
  background-color: #f44336;
  color: white;
}

button:last-of-type:hover {
  background-color: #d32f2f;
}
</style>
