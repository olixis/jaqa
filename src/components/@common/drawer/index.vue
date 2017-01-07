<template>
  <q-drawer left-side :swipe-only="swipeOnly" ref="leftDrawer" v-bind:class="[forceOpen]">
    <div class="toolbar light">
      <q-toolbar-title :padding="1">
        {{ AppName }}
      </q-toolbar-title>
    </div>

    <div class="list no-border platform-delimiter">
      <!--<hr>-->
      <div class="list-label">Geral</div>
      <q-drawer-link v-for="menu in AppMenu" :to="menu.route" :icon="menu.icon" exact>
        {{ menu.label }}
      </q-drawer-link>
    </div>
  </q-drawer>
</template>

<script type="text/javascript">
  // noinspection NpmUsedModulesInstalled
  // import Vue from 'vue';
  // noinspection NpmUsedModulesInstalled
  import { mapGetters } from 'vuex';
  // noinspection NpmUsedModulesInstalled
  import { Events } from 'quasar';

  export default {
    components: {
    },
    name: 'app-drawer',
    props: ['drawer'],
    data () {
      return {
        isOpen: false
      }
    },
    computed: {
      ...mapGetters(['AppName', 'AppMenu']),
      swipeOnly () {
        return this.drawer === 'swipe-only';
      },
      forceOpen () {
        return (!this.swipeOnly && this.isOpen) ? 'force-open' : '';
        // return 'force-open';
      }
    },
    mounted () {
      Events.$on('app-drawer.toggle-left', (options) => {
        this.toggleLeft();
      })
    },
    destroyed () {
      Events.$off('app-drawer.toggle-left');
    },
    methods: {
      toggleLeft () {
        this.isOpen = !this.isOpen;
        this.$refs.leftDrawer.toggle();
      }
    }
  };
</script>

<style lang="stylus">
  .drawer
    transition: all .3s
    .drawer-content
      transition: all .3s
    &.force-open
      flex: 0;
      .drawer-content
        transform: translateX(-280px) !important;
</style>