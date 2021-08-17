import { createRouter, createWebHistory } from 'vue-router';
import { staticRoutes } from './staticRoutes';

const routes = staticRoutes;
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
