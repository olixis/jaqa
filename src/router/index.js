/**
 * VueRouter
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

import { RouterRegister } from './register';

import { router as home } from 'components/home';
import { router as auth } from 'components/auth';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/home' }
];

RouterRegister.register(routes, home);
RouterRegister.register(routes, auth);

RouterRegister.register(routes, [
  {path: '*', component: 'error/404'}
]);

export default new VueRouter({
  routes: routes
})

