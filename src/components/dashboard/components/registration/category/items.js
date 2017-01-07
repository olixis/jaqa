
import {FormDefaults} from 'components/common/form';

const items = FormDefaults.apply({
  'name': {label: 'Nome', validator: 'required'},
  'note': {label: 'Observação'}
});

export default items;
