// auth abstract form
import {FormAbstract} from 'components/common/form';

// noinspection ReservedWordAsName
export default {
  extends: FormAbstract,
  data () {
    return {
      isActive: false
    }
  },
  computed: {
    opaque () {
      return this.isActive ? 'opaque' : '';
    }
  },
  mounted () {
    this.fetch();
    if (this.$route.query.email && this.has('email')) {
      this.set('email', this.$route.query.email);
    }
    if (this.$refs.autofocus) {
      this.$refs.autofocus.focus();
    }
    window.setTimeout(() => {
      this.isActive = true;
    }, 200);
  }
};
