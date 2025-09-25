<template>
  <div id="app">
    <div class="nav">
      <router-link active-class="active" to="/father">父传子</router-link>
      <router-link active-class="active" to="/nothing">nothing</router-link>
    </div>
    <div class="show"> 
      <RouterView/>
    </div>
 
  </div>
</template>

<script setup lang="ts" name="App">
import {RouterView } from 'vue-router'
</script>

<style scoped>
#app {
  display: flex;
  margin: 10px;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav a {
  text-decoration: none;
  color: #333;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #f0f0f0;
  transition: all 0.3s ease;
}

.nav a:hover {
  background-color: #007bff;
  color: white;
}

.nav a.active {
  background-color: #007bff;
  color: white;
  font-weight: bold;
}

.show {
  flex: 1;
}
</style>
