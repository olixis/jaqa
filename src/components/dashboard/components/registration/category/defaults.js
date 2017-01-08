
import {FormDefaults} from 'components/common/form';

const base = '/dashboard/registration/category';

const items = FormDefaults.apply({
  'name': {label: 'Nome', validator: 'required'},
  'note': {label: 'Observação'}
});

export default {
  base,
  items
};
