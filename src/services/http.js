
// noinspection JSUnresolvedVariable
import defaults from 'lodash';
import axios from 'axios';

const settings = {
  baseURL: 'http://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
};

export const http = options => axios.create(defaults(settings, options));

export default http(settings);
