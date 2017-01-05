// noinspection JSUnresolvedVariable
import {isUndefined, get as Get, set as Set} from 'lodash';

const api = {
  form (root) {
    return {
      get: function (id) {
        return new Promise(function (resolve) {
          window.setTimeout(() => {
            const data = {content: {name: 'bar', category: 'downloaded from server'}};
            resolve(data);
          }, 1000);
        });
      },
      set: function (record, callback) {
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

const form = {
  name: 'AbstractForm',
  data () {
    return {
      r: {},
      items: {},
      root: 'unknown',
      debug: false
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
  methods: {
    c (record) {
      this.r = record;
    },
    record (index, value) {
      if (isUndefined(value)) {
        return Get(this.r, index);
      }
      this.r[index] = value;
      return this;
    },
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
    item (path, set) {
      if (isUndefined(set)) {
        return Get(this.items, path);
      }
      Set(this.items, path, set);
      return this;
    },
    reset () {
      this.r = this.clone(this.schema);
    },
    fill (e, data) {
      if (e === null || typeof e !== 'object') {
        return e;
      }
      let c = e.constructor();
      for (let a in e) {
        if (e.hasOwnProperty(a) && !isUndefined(data[a])) {
          c[a] = data[a];
        }
      }
      return c;
    },
    save () {
      api.form(this.root).set(this.r, function () {
        alert('Registro salvo com sucesso!');
      });
    },
    fetch (id) {
      this.reset();
      if (id) {
        api.form(this.root).get(id).then((data) => {
          this.r = this.fill(this.r, data.content);
        });
      }
    }
  }
};

export default form;
