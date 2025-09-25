import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useCountStore = defineStore('count', () => {
  let countNum = ref(22)

  return { countNum }
})
