<template>
  <div>HomePage</div>
</template>

<script setup lang="ts" name="HomePage">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
let router = useRouter()
let res = onMounted(() => {
  setTimeout(() => {
    router.push('/news')
  }, 3000)
})
</script>
<style scoped></style>
