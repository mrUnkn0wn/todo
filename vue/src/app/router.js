import Vue from 'vue';
import Router from 'vue-router';

import Login from './auth/login/login.vue';
import Tasks from './tasks/tasks.vue';

Vue.use(Router);

const router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/',
      component: Tasks,
      beforeEnter (from, to, next) {
        const store = router.app.$options.store;
        store.dispatch('auth/check').then(() => {
          if (store.getters['auth/isAuth']) {
            store.dispatch('loadTasks')
              .then(() => next())
              .catch(() => next('/login'));
          } else {
            next('/login');
          }
        })
      }
    }
  ]
})

export default router;
