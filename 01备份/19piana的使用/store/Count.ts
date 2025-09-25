import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useCountStore = defineStore('count', () => {
  let countNum = ref(22)
  
  return { countNum }
})
