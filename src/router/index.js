import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import RSVP from '../views/RSVP.vue';
import Admin from '../views/Admin.vue';
import { auth } from '../firebase';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
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
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: {
        requiresAuth: true,
        title: 'Admin',
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
      path: '/testing',
      name: 'Testing',
      component: () =>
        import(/* webpackChunkName: "testing" */ '../views/Testing.vue'),
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
// router.beforeEach((to, from, next) => {
//   const currentUser = auth.currentUser;
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!currentUser) {
//       next({
//         path: '/login',
//       });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

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
