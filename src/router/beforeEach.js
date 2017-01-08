// noinspection NpmUsedModulesInstalled
import {Events} from 'quasar';
// import store from '../store';

const needAuth = auth => auth === true;

const beforeEach = (to, from, next) => {
  const auth = to.meta.requiresAuth;

  if (from.fullPath !== '/') {
    window.setTimeout(() => {
      Events.$emit('app-drawer.close-left');
    }, 1);
  }

  if (!needAuth(auth)) {
    next();
  }
  next();

  // store.dispatch('checkUserToken')
  //   .then(() => {
  //     next();
  //   })
  //   .catch(() => {
  //     next({ name: 'auth.singin' });
  //   });
};

export default beforeEach;
