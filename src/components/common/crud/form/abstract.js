// noinspection JSUnresolvedVariable
import {isUndefined, isObject, isArray, get as Get, set as Set} from 'lodash';
// noinspection NpmUsedModulesInstalled
import {Events} from 'quasar';

import {FormValidator} from 'components/common/crud/form';
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
      messages: {
        success: 'Tudo certo!'
      },
      root: 'unknown',
      isValid: false,
      isAvailable: true
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
    this.reset();
    Events.$on('form-synchronize', (data) => {
      this.synchronize(data.field, data.value);
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
     * @param field
     */
    has (field) {
      return typeof this.record[field] !== 'undefined';
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
            let element = this.$children[i];
            if (element.trigger) {
              element.trigger('record', this.record, element);
              element.trigger('errors', this.errors, element);
            }
          }
        }
      }
      return this;
    },
    /**
     * @param property
     * @param value
     * @param form
     */
    trigger (property, value, form) {
      if (isArray(form.$children)) {
        for (let i in form.$children) {
          if (form.$children.hasOwnProperty(i)) {
            let child = form.$children[i];
            if (child.trigger) {
              child.trigger(property, value);
            }
          }
        }
      }
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
     * @param element
     * @param empty
     * @returns {*}
     */
    clone (element, empty) {
      empty = isUndefined(empty) ? false : empty;

      if (element === null || typeof element !== 'object') {
        return element;
      }
      let c = element.constructor();
      for (let a in element) {
        if (element.hasOwnProperty(a)) {
          c[a] = empty ? null : element[a];
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
      this.errors = this.clone(this.schema, true);
      this.propagate();
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
        this.load(true);
        api.form(this.root).receive(id).then((data) => {
          this.load(false);
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
    },
    /**
     * @param record
     */
    undoing (record) {
      this.load(true);
      return new Promise((resolve) => {
        window.setTimeout(() => {
          console.log('undoing: ', JSON.stringify(record));
          this.load(false);
          resolve(true);
        }, 1000)
      });
    },
    /**
     */
    save () {
      this
        .load(true)
        .action(this.param)
        .then((record) => {
          this.success(record);
        })
        .catch();
    },
    /**
     * @param record
     */
    success (record) {
      this.load(false);
      let undo = null;
      if (this.undo) {
        undo = () => {
          return this.undoing(record);
        }
      }
      this.toast(this.messages.success, undo);
    }
  }
};

export default FormAbstract;
