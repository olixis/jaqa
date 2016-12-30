
import http from './http';

const api = {
  login (user) {
    return http.post('/auth/login', user);
  }
};

export default api;