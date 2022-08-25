import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/pages/index.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/pages/404.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/about.vue')
    }
  ]
});

export async function setupRouter(app: App) {
  app.use(router);
  // 路由守卫createRouterGuard(router);
  await router.isReady();
}
