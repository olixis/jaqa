import http from './http';

const api = {
  auth: {
    login (user) {
      return http.post('/auth/login', user);
    }
  },
  /**
   * @param root
   * @returns {object}
   */
  form (root) {
    return {
      send: function (record, callback, action) {
        return new Promise(function (resolve) {
          window.setTimeout(() => {
            if (callback) {
              callback.call(this, record);
            }
            resolve(record);
          }, 1000);
        });
      },
      receive: function (id, action) {
        return new Promise(function (resolve) {
          window.setTimeout(() => {
            const data = {content: {name: 'William'}};
            resolve(data);
          }, 1000);
        });
      }
    }
  }
};

export default api;
