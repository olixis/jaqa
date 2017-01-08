import { isEmpty, isUndefined } from 'lodash';
// validation rules
/**
 accepted, active-url, after:date, alpha, alpha-dash, alpha-numeric, array, before:date, between:min,max, boolean,
 confirmed, date, date_format:format, different:field, digits:value, digits_between:min,max, dimensions:width,height,
 distinct, email, exists:class.[property,(...)], file, filled, image, in:[foo,bar,(...)], in-array:field, integer, ip,
 json, max:value, mimetypes:[text/plain,(...)], mimes:[jpeg,png,bmp,gif,svg,(...)], min:value, nullable,
 not-in:[foo,bar,(...)], numeric, present, regex:pattern, required, required-if, same:field, size:value, string,
 timezone, unique:[field,(...)], url
 */

export default {
  /**
   * @param value
   * @returns {*}
   */
  required (value) {
    return isEmpty(value);
  },
  /**
   * @param value
   * @returns {*}
   */
  password (value) {
    return isEmpty(value);
  },
  /**
   * @param value
   * @returns {*}
   */
  email (value) {
    // eslint-disable-next-line
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !re.test(value);
  },
  /**
   * @param value
   * @param record
   * @param options
   */
  same (value, record, options) {
    return !(value === record[options]);
  },
  /**
   * @param validator
   * @param value
   * @param record
   * @returns {*}
   */
  apply (validator, value, record) {
    let options = validator.split(':');
    if (this[options[0]]) {
      return this[options[0]](value, record, isUndefined(options[1]) ? null : options[1]);
    }
    return 'unknown ' + validator;
  }
};
