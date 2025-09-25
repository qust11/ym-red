import { createRouter, createWebHistory } from 'vue-router'

import Father from '@/components/props父子/Father.vue'
import Nothing from '@/components/props父子/Nothing.vue'

const routes = [
  {
    path: '/father',
    name: 'Father',
    component: Father,
  },
  {
    path: '/nothing',
    name: 'Nothing',
    component: Nothing,
  },
  {
    path: '/',
    redirect: '/father',
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router