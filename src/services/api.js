
import http from './http';

const api = {
  auth: {
    login (user) {
      return http.post('/auth/login', user);
    }
  }
};

export default api;
