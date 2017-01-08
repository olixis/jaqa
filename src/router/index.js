import Vue from 'vue';
import Router from 'vue-router';

import { RouterRegister } from './register';
import beforeEach from './beforeEach'

import { router as home } from 'components/home';
import { router as dashboard } from 'components/dashboard';
import { router as auth } from 'components/auth';

// noinspection JSCheckFunctionSignatures
Vue.use(Router);

const routes = [
  { path: '/', redirect: '/home' }
];

RouterRegister.register(routes, home);
RouterRegister.register(routes, auth);
RouterRegister.register(routes, dashboard);

RouterRegister.register(routes, [
  {path: '*', component: 'error/404'}
]);

const router = new Router({
  routes: routes
});

// noinspection JSCheckFunctionSignatures
router.beforeEach(beforeEach);

export default router;
