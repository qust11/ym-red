import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'
import News from '@/pages/News.vue'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import NewsDetail from '@/pages/NewsDetail.vue'
const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/news', component: News, children: [{ path: 'detail', component: NewsDetail }] },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
