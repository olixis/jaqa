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

  new Vue({
    el: '#quasar-app',
    store: store,
    router: router,
    render: h => h(App)
  });
});
