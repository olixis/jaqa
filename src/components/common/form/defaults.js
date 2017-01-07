// noinspection JSUnresolvedVariable
import {defaults} from 'lodash';

/**
 * @param items
 * @returns {*}
 * @constructor
 */
const Defaults = {
  properties: {name: '', label: '', validator: '', type: '', hidden: false, disabled: false, autofocus: false, defaults: ''},
  apply (items) {
    for (let name in items) {
      if (items.hasOwnProperty(name)) {
        let item = items[name];
        item.name = name;
        items[name] = defaults(item, this.properties);
      }
    }
    return items;
  }
};

export default Defaults;
