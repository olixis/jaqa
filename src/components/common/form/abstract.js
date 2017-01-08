// noinspection JSUnresolvedVariable
import {isUndefined, isObject, isArray, get as Get, set as Set} from 'lodash';
// noinspection NpmUsedModulesInstalled
import {Events} from 'quasar';

import {FormValidator} from 'components/common/form';
import Common from 'components/common';
import api from 'services/api';

const FormAbstract = {
  extends: Common,
  name: 'form-abstract',
  data () {
    return {
      record: {},
      errors: {},
      items: {},
      root: 'unknown',
      isValid: false,
      isAvailable: true,
      debug: true
    };
  },
  computed: {
    schema () {
      let schema = {};
      const i = this.items;
      for (let a in i) {
        if (i.hasOwnProperty(a)) {
          schema[i[a]['field']] = isUndefined(i[a]['defaults']) ? '' : i[a]['defaults'];
        }
      }
      return schema;
    }
  },
  /**
   * on events
   */
  mounted () {
    Events.$on('form-synchronize', (data) => {
      this.synchronize(data.field, data.value, data.propagate);
    });
  },
  /**
   * off events
   */
  destroyed () {
    Events.$off('form-synchronize');
  },
  methods: {
    /**
     * @param field
     * @param value
     * @returns {FormAbstract}
     */
    synchronize (field, value) {
      this.set(field, value);
      return this;
    },
    /**
     * @param field
     * @param value
     * @returns {FormAbstract}
     */
    set (field, value) {
      this.record[field] = this.format(value, this.item(field + '.type'));
      this.change(field, value);
      this.validation();
      this.propagate();
      return this;
    },
    /**
     * @param field
     */
    get (field) {
      return Get(this.record, field);
    },
    /**
     * @returns {FormAbstract}
     */
    validation () {
      let record = this.clone(this.record);
      let isValid = true;
      for (let field in record) {
        if (record.hasOwnProperty(field) && this.item(field + '.validator')) {
          let error = FormValidator.apply(this.item(field + '.validator'), record[field], record);
          this.errors[field] = error;
          if (error) {
            isValid = false;
          }
        }
      }
      this.isValid = isValid;

      return this;
    },
    /**
     * @returns {FormAbstract}
     */
    propagate () {
      if (isArray(this.$children)) {
        for (let i in this.$children) {
          if (this.$children.hasOwnProperty(i)) {
            let child = this.$children[i];
            if (child.trigger) {
              child.trigger('record', this.record);
              child.trigger('error', this.errors[child.options['field']] ? 'error' : '');
            }
          }
        }
      }
      return this;
    },
    /**
     * @param field
     * @param value
     * @returns {object}
     */
    change (field, value) {
      return {field, value};
    },
    /**
     * @param e
     * @returns {*}
     */
    clone (e) {
      if (e === null || typeof e !== 'object') {
        return e;
      }
      let c = e.constructor();
      for (let a in e) {
        if (e.hasOwnProperty(a)) {
          c[a] = e[a];
        }
      }
      return c;
    },
    /**
     * @param path
     * @param set
     * @returns {FormAbstract}
     */
    item (path, set) {
      if (isUndefined(set)) {
        return Get(this.items, path);
      }
      Set(this.items, path, set);
      return this;
    },
    /**
     * @returns {FormAbstract}
     */
    reset () {
      this.record = this.clone(this.schema);
      return this;
    },
    /**
     * @param record
     * @param data
     * @returns {object}
     */
    fill (record, data) {
      if (record === null || typeof record !== 'object') {
        return record;
      }
      let c = record.constructor();
      for (let a in record) {
        if (record.hasOwnProperty(a)) {
          c[a] = !isUndefined(data[a]) ? data[a] : record[a];
        }
      }
      return c;
    },
    /**
     * @param action
     * @param callback
     */
    action (action, callback) {
      return api.form(this.root).send(this.record, callback, action);
    },
    /**
     * @param id
     */
    fetch (id) {
      this.reset();
      if (id) {
        api.form(this.root).receive(id).then((data) => {
          const record = data.content;
          if (!record || !isObject(record)) {
            return;
          }
          for (let field in this.record) {
            if (this.record.hasOwnProperty(field) && record.hasOwnProperty(field)) {
              this.set(field, record[field]);
            }
          }
        });
      }
    },
    /**
     * @param value
     * @param type
     * @returns {*}
     */
    format (value, type) {
      switch (type) {
        case 'boolean':
          return !!value;
      }
      return value;
    }
  }
};

export default FormAbstract;
