
import defaults from 'lodash';
import axios from 'axios';

const settings = {};

export const create = options => axios.create(defaults(settings, options));

export default create(settings);
