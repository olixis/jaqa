<template>
  <!-- Don't drop "quasar-app" class -->
  <div id="quasar-app">
    <router-view></router-view>
  </div>
</template>

<script type="javascript">
  import { mapGetters } from 'vuex';

  require('../themes/app.' + __THEME + '.styl')

  export default {
    name: 'app',
    computed: {
      ...mapGetters(['AppTitle'])
    },
    watch: {
      'AppTitle': function (title) {
        document.title = title
      }
    },
    created () {
      // noinspection JSValidateTypes
      document.title = this.AppTitle;
    }
  }
</script>
