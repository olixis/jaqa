import Vue from 'vue';
// noinspection NpmUsedModulesInstalled
import Quasar from 'quasar';
// noinspection JSUnresolvedVariable
import App from 'components/app';

import router from 'src/router';
import store from 'src/store';

// noinspection JSUnresolvedVariable
Quasar.theme.set(__THEME);
Vue.use(Quasar);

Quasar.start(() => {
  /* eslint-disable no-new */
  const href = false;

  const app = new Vue({
    el: '#quasar-app',
    store: store,
    router: router,
    render: h => h(App)
  });

  if (href) {
    window.addEventListener('hashchange', (hash) => {
      let url = hash.newURL.substr(hash.newURL.indexOf('#') + 1);
      app.currentView = (url === '/' ? 'main' : url.replace(/\//g, ''));
    });
  }
});
