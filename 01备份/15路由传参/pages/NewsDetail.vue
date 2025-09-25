<template>
  <!-- 导航区 -->
  <div id="NewsDetail-nav">
    <p>新闻id：{{ query.id }}</p>
    <p>新闻标题：{{ query.title }}</p>
    <p>新闻详情：{{ query.detail }}</p>
  </div>
</template>

<script setup lang="ts" name="NewsDetail">
import { useRoute } from 'vue-router'
import { toRefs } from 'vue'
let router = useRoute()

let { query } = toRefs(router)
</script>
<style scoped></style>
