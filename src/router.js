import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Account from './views/Account.vue';

Vue.use(Router);


const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },

    {
      path: '/account',
      name: 'account',
      component: Account,
    },
  ],
});

export default router;
