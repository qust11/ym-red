import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useLangueStore = defineStore('langue', () => {
  let langue = ref('en')
  return { langue }
})
