<template>
  <!-- 导航区 -->
  <div id="nav">
    <div>
      <ul>
        <li v-for="item in news" :key="item.id">
          <!-- <RouterLink
            :to="`/news/detail?id=${item.id}&title=${item.title}&detail=${item.detail}`"
            >{{ item.title }}</RouterLink
          > -->
          <RouterLink
            :to="{
              name: 'newsDetail',
              query: {
                id: item.id,
                title: item.title,
                detail: item.detail,
              },
            }"
            >{{ item.title }}</RouterLink
          >
        </li>
      </ul>
    </div>
    <!-- 展示区 -->
    <div id="show">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
import { ref } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
let news = ref([
  { id: '1', title: '新闻1', detail: '新闻详情1' },
  { id: '2', title: '新闻2', detail: '新闻详情2' },
  { id: '3', title: '新闻3', detail: '新闻详情3' },
])
</script>
<style scoped>
#nav {
  display: flex;
  height: 400px; /* 或其他具体高度值 */
  margin-bottom: 50px;
}

#show {
  background-color: aqua;
  padding: 10px;
  margin: 10px;
  flex: 1; /* 让展示区占据剩余空间 */
  overflow: auto;
  height: 100%;
}
</style>
