<template>
  <div class="person">
    <!-- <h1>{{ a }}</h1> -->
    <ul>
      <li v-for="person in personList" :key="person.id">{{ person.name }} - {{ person.age }}</li>
    </ul>
  </div>
</template>

<script setup name="Person" lang="ts">
import { type PersonInter } from '@/types/pppp'
// 可以通过defineProps来接受父组件传递的参数
// defineProps(['a'])

// 获取父组件传递的参数
// defineProps(['personList'])

// 接受数据 + 类型限制
// 如果父组件不传递PersonInter限制的数据 会报错
// defineProps<{
//   personList: PersonInter[]
// }>()

// 接受数据 + 类型限制 + 非必传递
// defineProps<{
//   personList?: PersonInter[]
// }>()

// 接受数据 + 类型限制 + 默认值
withDefaults(
  defineProps<{
    personList?: PersonInter[]
  }>(),
  {
    personList: () => [
      {
        id: '1',
        name: '王五',
        age: 18,
      },
      {
        id: '2',
        name: '赵六',
        age: 12,
      },
    ],
  },
)
</script>

<style scoped>
.person {
  background-color: azure;
  padding: 10px;
}

button {
  margin: 10px;
}
</style>
