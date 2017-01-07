
// noinspection JSUnresolvedVariable
import {get} from 'lodash';

/**
 * @type object
 */
const Lang = {
  locale: 'en',
  get (scope, i18n) {
    // noinspection JSUnresolvedFunction
    const env = require('./locales/' + this.locale + '/' + scope).default;

    return get(env, i18n);
  }
};

export default Lang;
