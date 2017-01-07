
import {FormDefaults} from 'components/@common/form';

const items = FormDefaults.apply({
  'login': {label: 'Login', autofocus: true, validator: 'required'},
  'password': {label: 'Senha'},
  'remember': {label: 'Manter-me conectado'},
  'observacao': {label: 'Observação'}
});

export default items;
