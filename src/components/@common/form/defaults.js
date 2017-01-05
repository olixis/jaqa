// noinspection JSUnresolvedVariable
import {defaults} from 'lodash';

/**
 * @param items
 * @returns {*}
 * @constructor
 */
const Defaults = {
  properties: {name: '', label: '', hidden: false, disabled: false, autofocus: false, defaults: ''},
  apply (items) {
    for (let a in items) {
      if (items.hasOwnProperty(a)) {
        items[a] = defaults(items[a], this.properties);
      }
    }
    return items;
  }
};

export default Defaults;
