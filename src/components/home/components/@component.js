/**
 * base home components
 */
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['AppName'])
  },
  methods: {
    log (...args) {
      // console.log(args);
    },
    ...mapActions(['changeTitle'])
  },
  created () {
    this.log('created', this.$options.name);
  },
  activated () {
    this.log('activated', this.$options.name);
  },
  updated () {
    this.log('updated', this.$options.name);
  },
  mounted () {
    this.log('mounted', this.$options.name);
    this.changeTitle(this.AppName + ' / ' + this.label);
  },
  destroyed () {
    this.log('destroyed', this.$options.name);
  }
};
