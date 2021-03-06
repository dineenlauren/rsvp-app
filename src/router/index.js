import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import RSVP from '../views/RSVP.vue';
import { auth } from '../firebase';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/rsvp',
      name: 'RSVP',
      component: RSVP,
      meta: {
        requiresAuth: true,
        title: 'RSVP',
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: () =>
        import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () =>
        import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },

    {
      path: '/wedding',
      name: 'Wedding',
      component: () =>
        import(/* webpackChunkName: "wedding" */ '../views/Wedding.vue'),
    },
    {
      path: '/registry',
      name: 'Registry',
      component: () =>
        import(/* webpackChunkName: "about" */ '../views/Registry.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  const currentUser = auth.currentUser;

  if (requiresAuth && !currentUser)
    next({
      path: '/login',
      query: { redirect: to.fullPath },
    });
  else if (!requiresAuth && currentUser) next();
  else if (!requiresAuth && !currentUser) next();
  else next();
});

export default router;
