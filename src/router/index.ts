import { createRouter, createWebHistory } from 'vue-router';
import { staticRoutes } from './staticRoutes';
import defaultRoutes from './defaultRoutes';

const routes = staticRoutes.concat(defaultRoutes);
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const userInfo = localStorage.getItem('user');
  if (to.path === '/login') {
    next();
  } else if (userInfo) {
    next();
  } else {
    next({
      path: '/login',
    });
  }
});
export default router;
