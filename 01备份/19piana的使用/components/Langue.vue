<template>
  <div class="langue">
    <div>Langue</div>
    <button @click="getLangue">点我获取土味情话</button>
    <ul>
      <li v-for="(langue,index) in langueList" :key="index">{{ langue }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="Langue">
import axios from 'axios'
import { ref } from 'vue'
import { useLangueStore } from '@/store/Langue'

let k = useLangueStore()
console.log(k.langue)

let langueList = ref<string[]>([])
async function getLangue() {
  let res = await axios.get('/api/api/SweetNothings/Web/1')
  langueList.value.push(res.data.returnObj.content)
}
</script>

<style scoped>
.langue {
  background-color: chocolate;
  padding: 10px;
  align-items: center;
}
</style>
