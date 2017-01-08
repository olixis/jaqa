// noinspection JSUnresolvedVariable
import {defaults} from 'lodash';

/**
 * @param items
 * @returns {*}
 * @constructor
 */
const Defaults = {
  properties: {field: '', label: '', validator: '', type: '', hidden: false, disabled: false, autofocus: false, defaults: ''},
  apply (items) {
    for (let field in items) {
      if (items.hasOwnProperty(field)) {
        let item = items[field];
        item.field = field;
        items[field] = defaults(item, this.properties);
      }
    }
    return items;
  }
};

export default Defaults;
