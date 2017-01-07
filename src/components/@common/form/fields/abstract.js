// noinspection JSUnresolvedVariable
import {get as Get} from 'lodash';
// noinspection NpmUsedModulesInstalled
import { Events } from 'quasar';
import Common from 'components/@common';

export default {
  extends: Common,
  name: 'f-abstract',
  props: ['options'],
  data () {
    return {
      record: {},
      error: '',
      propagate: true,
      value: this.parse(this.option('defaults'))
    }
  },
  computed: {
    name () {
      return this.option('name');
    },
    label () {
      return this.option('label');
    },
    disabled () {
      return this.option('disabled');
    }
  },
  watch: {
    /**
     * @param value
     */
    value (value) {
      if (this.propagate) {
        this.synchronize(this.parse(value));
      }
      this.propagate = true;
    }
  },
  mounted () {
    // noinspection JSUnresolvedFunction
    if (this.option('autofocus') && this.$refs.autofocus) {
      // noinspection JSUnresolvedVariable
      this.$refs.autofocus.focus();
    }
  },
  methods: {
    /**
     * @param value
     * @param propagate
     */
    synchronize (value, propagate) {
      const data = {
        name: this.name,
        value: (value && value.target) ? value.target.value : value,
        propagate: propagate
      };
      Events.$emit('form-synchronize', data);
    },
    /**
     * @param property
     * @param fallback
     */
    option (property, fallback) {
      // noinspection JSUnresolvedVariable
      return Get(this.options, property, fallback);
    },
    /**
     * @param value
     * @returns {*}
     */
    parse (value) {
      return value;
    },
    /**
     * @param property
     * @param value
     */
    trigger (property, value) {
      this[property] = value;
      if (property === 'record' && this.record[this.option('name')] !== this.value) {
        this.propagate = false;
        console.log(this.record[this.option('name')], this.value);
        this.value = this.parse(this.record[this.option('name')]);
      }
      this.$nextTick();
    }
  }
};
