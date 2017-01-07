// default component
import { mapGetters, mapActions } from 'vuex';

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
      this.$router.push({path});
    },
    /**
     * @param args
     */
    log (...args) {
      console.log(args);
    },
    ...mapActions(['changeTitle', 'changeMenu'])
  }
};

export default Common;
