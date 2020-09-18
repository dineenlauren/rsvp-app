import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import RSVP from '../views/RSVP.vue';
import { auth } from '../firebase';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
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
      path: '/signup',
      name: 'SignUp',
      component: () =>
        import(/* webpackChunkName: "signup" */ '../views/SignUp.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () =>
        import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
      path: '/faqs',
      name: 'FAQs',
      component: () =>
        import(/* webpackChunkName: "faqs" */ '../views/FAQs.vue'),
    },
    {
      path: '/registry',
      name: 'Registry',
      component: () =>
        import(/* webpackChunkName: "about" */ '../views/Registry.vue'),
    },
  ],
});

// navigation guard to check for logged in users
// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);

//   if (requiresAuth && !auth.currentUser) {
//     next('/login');
//   } else {
//     next();
//   }
// });

//from rd-wedding
router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser;
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!currentUser) {
      next({
        path: '/login',
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
