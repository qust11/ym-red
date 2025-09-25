<template>
  <div id="app">
    <Person />
    <h2>路由测试</h2>
    <div id="navigate">
      <RouterLink to="/home" active-class="active">首页</RouterLink>
      <RouterLink to="/about" active-class="active">关于</RouterLink>
      <RouterLink to="/news" active-class="active">新闻</RouterLink>
    </div>
    <div id="main-content">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts" name="App">
import { ref, onMounted } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
import Person from '@/components/Person.vue'
</script>

<style scoped>
#app {
  font-family: Aaviar, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

a {
  text-decoration: none;
  color: rgb(231, 231, 240);
  margin: 10px;
  font-size: large;
  padding: 5px 10px;
  border-radius: 4px;
  transition: all 0.3s ease;
  background-color: #535655;
}

a:hover {
  background-color: #b88bad;
}

a.active {
  background-color: #42b983;
  color: white;
}

#main-content {
  margin-top: 30px;
  width: 700px;
  height: 700px;
  border-radius: 10px;
  border: 2px solid #e484d6;
}
</style>
