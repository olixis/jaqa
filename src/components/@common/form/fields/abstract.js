// noinspection JSUnresolvedVariable
import {get as Get} from 'lodash';

export default {
  props: ['r', 'options'],
  computed: {
    name () {
      // noinspection JSUnresolvedFunction
      return this.get('name');
    },
    label () {
      // noinspection JSUnresolvedFunction
      return this.get('label');
    },
    disabled () {
      // noinspection JSUnresolvedFunction
      return this.get('disabled');
    },
    value () {
      return this.r[this.name];
    }
  },
  mounted () {
    // noinspection JSUnresolvedVariable
    if (this.get('autofocus') && this.$refs.autofocus) {
      // noinspection JSUnresolvedVariable
      this.$refs.autofocus.focus();
    }
  },
  methods: {
    change (e) {
      // noinspection JSUnresolvedVariable
      this.r[this.name] = this.parse(e && e.target ? e.target.value : e);
      this.$emit('c', this.r)
    },
    get (property, fallback) {
      // noinspection JSUnresolvedVariable
      return Get(this.options, property, fallback);
    },
    parse (value) {
      return value;
    }
  }
};
