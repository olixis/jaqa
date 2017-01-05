
// noinspection JSUnresolvedVariable
import axios from 'axios';

// noinspection JSUnusedGlobalSymbols
const settings = {
  baseURL: 'http://localhost:82/v1/',
  timeout: 6000,
  headers: {'X-Custom-Header': 'foobar'},
  validateStatus: function (status) {
    return status >= 200 && status < 300;
  }
};

const http = axios.create(settings);

http.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

export default http;
