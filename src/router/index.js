import Vue from 'vue'
import VueRouter from 'vue-router'
import GuestRoutes from './guest'
import AdminRoutes from './admin'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
      ...GuestRoutes,
      ...AdminRoutes
  ]
});

router.beforeEach((to, from, next) => {
  return next()
});

export default router;