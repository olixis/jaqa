// noinspection JSUnresolvedVariable
import {isUndefined, get as Get, set as Set, isArray} from 'lodash';
// noinspection NpmUsedModulesInstalled
import {Events} from 'quasar';
import {FormValidator} from 'components/@common/form';
import Common from 'components/@common';

const api = {
  /**
   * @param root
   * @param action
   * @returns {object}
   */
  form (root, action) {
    return {
      get: function (id) {
        return new Promise(function (resolve) {
          window.setTimeout(() => {
            const data = {content: {name: 'William'}};
            resolve(data);
          }, 1000);
        });
      },
      post: function (record, callback) {
        return new Promise(function (resolve) {
          window.setTimeout(() => {
            if (callback) {
              callback.call(this, record);
            }
            resolve(record);
          }, 100);
        });
      }
    }
  }
};

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
          schema[i[a]['name']] = isUndefined(i[a]['defaults']) ? '' : i[a]['defaults'];
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
      this.synchronize(data.name, data.value, data.propagate);
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
     * @param name
     * @param value
     * @returns {FormAbstract}
     */
    synchronize (name, value) {
      this.set(name, value);
      return this;
    },
    /**
     * @param name
     * @param value
     * @returns {FormAbstract}
     */
    set (name, value) {
      this.record[name] = this.format(value, this.item(name + '.type'));
      this.change(name, value);
      this.validation();
      this.propagate();
      return this;
    },
    /**
     * @param name
     */
    get (name) {
      return Get(this.record, name);
    },
    /**
     * @returns {FormAbstract}
     */
    validation () {
      let record = this.clone(this.record);
      let isValid = true;
      for (let name in record) {
        if (record.hasOwnProperty(name) && this.item(name + '.validator')) {
          let error = FormValidator.apply(this.item(name + '.validator'), record[name], record);
          this.errors[name] = error;
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
            this.$children[i].trigger('record', this.record);
            this.$children[i].trigger('error', this.errors[this.$children[i].options['name']] ? 'error' : '');
          }
        }
      }
      return this;
    },
    /**
     * @param name
     * @param value
     * @returns {object}
     */
    change (name, value) {
      return {name, value};
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
      return api.form(this.root, action).post(this.record, callback);
    },
    /**
     * @param id
     */
    fetch (id) {
      this.reset();
      if (id) {
        api.form(this.root).get(id).then((data) => {
          console.log(this.schema, this.recod, data.content);
          this.record = this.fill(this.fill(this.schema, this.record), data.content);
          this.propagate();
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
