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
  {
    path: '/news',
    component: News,
    children: [
      {
        name: 'newsDetail',
        path: 'detail',
        // path: 'detail/:id/:title/:detail?',
        component: NewsDetail,
        // 第一种方法 只能配合params参数使用
        // props: true,

        // 第二种方法
        props(route: { query: any }) {
          return route.query
        },
      },
    ],
  },
  {
    path: '/',
    redirect: '/home',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
