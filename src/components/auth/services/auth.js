
import Api from 'services/api';

const Auth = {
  /**
   * @param user
   * @returns {Promise}
   */
  login (user) {
    return new Promise(function (resolve, reject) {
      Api.auth.login(user)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  }
};

export default Auth;
