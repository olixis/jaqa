<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script type="javascript">
  // noinspection NpmUsedModulesInstalled
  import {mapGetters} from 'vuex';

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
