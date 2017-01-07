/**
 * base home components
 */

import Common from 'components/@common';

export default {
  extends: Common,
  name: 'home-abstract',
  data () {
    return {
      label: ''
    }
  },
  mounted () {
    this.changeTitle(this.AppName + ' / ' + this.label);
  }
};
