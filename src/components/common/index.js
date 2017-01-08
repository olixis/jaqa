// default component
import {mapGetters, mapActions} from 'vuex';
// noinspection NpmUsedModulesInstalled
import {Toast, Loading} from 'quasar';
// noinspection NpmUsedModulesInstalled
import {isUndefined as _isUndefined, isFunction as _isFunction} from 'lodash';

import {Lang} from 'services/lang';

const Common = {
  data () {
    return {
      base: ''
    }
  },
  computed: {
    ...mapGetters(['AppName', 'AppMenu'])
  },
  created () {
    // this.log('created', this.$options.name);
  },
  activated () {
    // this.log('activated', this.$options.name);
  },
  updated () {
    // this.log('updated', this.$options.name);
  },
  mounted () {
    // this.log('mounted', this.$options.name);
  },
  destroyed () {
    // this.log('destroyed', this.$options.name);
  },
  methods: {
    /**
     * @param path
     */
    route (path) {
      if (path.substring(0, 2) === './') {
        path = this.$route.path + '/' + path.substring(2);
      }
      path = this.base + path;
      this.$router.push({path});
    },
    /**
     * @param args
     */
    log (...args) {
      console.log(args);
    },
    /**
     * @param visibility
     * @param callback
     * @returns {Common}
     */
    load (visibility, callback) {
      if (_isUndefined(visibility)) {
        visibility = Loading.isActive();
      }
      if (visibility) {
        Loading.show();
      }
      else {
        Loading.hide();
      }
      if (_isFunction(callback)) {
        callback();
      }
      return this;
    },
    /**
     * @param message
     * @param undo
     * @param icon
     */
    toast (message, undo, icon) {
      const common = this;
      const action = {
        label: 'Desfazer',
        handler () {
          const promise = undo();
          if (promise && promise.then) {
            promise.then(() => {
              common.toast('Pronto, desfeito!', null, 'restore');
            });
          }
        },
        color: '#ffeb3b'
      };
      const button = !undo ? {} : action;

      Toast.create({
        html: message,
        icon: icon || 'done',
        timeout: 10000,
        // color: '#f8c1c1',
        // bgColor: 'white',
        button
      });
    },
    /**
     * @param scope
     * @param i18n
     * @returns {*}
     */
    lang (scope, i18n) {
      return Lang.get(scope, i18n);
    },
    ...mapActions(['changeTitle', 'changeMenu'])
  }
};

export default Common;
