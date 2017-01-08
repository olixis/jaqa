// defaults
import {FormDefaults} from 'components/common/crud/form';
import {Utils} from 'quasar-framework';

/**
 * root endpoint of api to access the resources of entity
 * @type {String}
 */
const root = '/api/category';

/**
 * route base to access the entity
 * @type {String}
 */
const base = '/dashboard/registration/category';

/**
 * fields of entity
 * @type {Object}
 */
const items = FormDefaults.apply({
  'name': {label: 'Name', validator: 'required'},
  'note': {label: 'Note'}
});

/**
 * fields of entity
 * @type {Array}
 */
const columns = [
  {field: 'options', label: 'Options', width: '100px'},
  {field: 'name', width: '120px'},
  {field: 'note', width: '500px'}
];

columns.forEach((column) => {
  column.label = items[column.field] ? items[column.field].label : column.label;
});

/**
 * default data of grid
 * @type {object}
 */
const grid = {
  base: base,
  table: [],
  columns: columns,
  searchModel: '',
  searchVisible: false,
  paginationModel: 1,
  paginationLimit: {
    min: 1,
    max: 1
  },
  config: {
    title: '',
    refresh: true,
    columnPicker: true,
    leftStickyColumns: 1,
    rightStickyColumns: 0,
    bodyStyle: {
      maxHeight: (Utils.dom.viewport().height - 240) + 'px'
    },
    rowHeight: '50px',
    responsive: true,
    pagination: false,
    selection: 'multiple',
    messages: {
      noData: '<i>warning</i> No data available to show.',
      noDataAfterFiltering: '<i>warning</i> No results. Please refine your search terms.'
    }
  }
};

export default {root, base, items, grid};
