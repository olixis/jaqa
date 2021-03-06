// noinspection JSUnresolvedVariable
import {get as Get} from 'lodash';
// noinspection NpmUsedModulesInstalled
import { Events } from 'quasar';
import Common from 'components/common';

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
    field () {
      return this.option('field');
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
        field: this.field,
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
      switch (property) {
        case 'record':
          if (this.record[this.option('field')] !== this.value) {
            this.propagate = false;
            this.value = this.parse(value[this.option('field')]);
          }
          break;
        case 'errors':
          this.error = value[this.option('field')];
          break;
      }
      this.$nextTick();
    }
  }
};
