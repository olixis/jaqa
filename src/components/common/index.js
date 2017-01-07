// default component
import { mapGetters, mapActions } from 'vuex';
// noinspection NpmUsedModulesInstalled
import {Toast} from 'quasar';

const Common = {
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
      this.$router.push({path});
    },
    /**
     * @param args
     */
    log (...args) {
      console.log(args);
    },
    toast (message, undo, icon) {
      const common = this;
      const button = !undo ? {} : {
        label: 'Desfazer',
        handler () {
          const promise = undo();
          if (promise.then) {
            promise.then(() => {
              common.toast('Pronto, desfeito!', null, 'settings_backup_restore');
            });
          }
        },
        color: '#ffeb3b'
      };

      Toast.create({
        html: message,
        icon: icon || 'done',
        timeout: 10000,
        // color: '#f8c1c1',
        // bgColor: 'white',
        button
      });
    },
    ...mapActions(['changeTitle', 'changeMenu'])
  }
};

export default Common;
