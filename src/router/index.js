import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/s1', // 首页
      name: 'homeOverview',
      component: () => import('@/pages/home/HomeOverview.vue'),
      children: [
        {
          path: '/', // 首页
          name: 'home',
          component: () => import('@/pages/home/HomeView.vue')
        },
        // {
        //   path: '/about',
        //   name: 'about',
        //   // route level code-splitting
        //   // this generates a separate chunk (About.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import('../pages/AboutView.vue')
        // }
        {
          path: '/order', // 订单
          name: 'order',
          component: () => import('@/pages/home/order/OrderView.vue')
        },
        {
          path: '/strategy', // 攻略
          name: 'strategy',
          component: () => import('@/pages/home/strategy/StrategyView.vue')
        },
        {
          path: '/mine', // 我的
          name: 'mine',
          component: () => import('@/pages/home/mine/MineView.vue')
        }
      ]
    },
    {
      path: '/search', // 搜索
      name: 'search',
      component: () => import('@/pages/home/mine/MineView.vue')
    },
    {
      path: '/map-search', // 地图搜索
      name: 'mapSearch',
      component: () => import('@/pages/home/mine/MineView.vue')
    },
    {
      path: '/itinerary', // 行程
      name: 'itinerary',
      component: () => import('@/pages/home/mine/MineView.vue'),
      children: [
        {
          path: 'my-itinerary', // 我的行程
          component: () => import('@/pages/home/mine/MineView.vue')
        },
        {
          path: 'my-order', // 全部订单
          component: () => import('@/pages/home/mine/MineView.vue')
        }
      ]
    }
  ]
})

export default router
