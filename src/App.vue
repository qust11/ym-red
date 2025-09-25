<template>
  <div id="app">
    <Count />
    <Langue />
  </div>
</template>

<script setup lang="ts" name="App">
import Count from '@/components/Count.vue'
import Langue from './components/Langue.vue'
</script>

<style scoped>
#app {
  margin: 20px;
}
</style>
