<template>
  <!-- 导航区 -->
  <div id="NewsDetail-nav">
    <p>新闻id：{{ id }}</p>
    <p>新闻标题：{{ title }}</p>
    <p>新闻详情：{{ detail }}</p>
  </div>
</template>

<script setup lang="ts" name="NewsDetail">
defineProps(['id', 'title', 'detail'])
</script>
<style scoped></style>
