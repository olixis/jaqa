<template>
  <q-drawer left-side :swipe-only="swipeOnly" ref="leftDrawer" v-bind:class="[forceClose]">
    <div class="toolbar light" v-if="swipeOnly">
      <q-toolbar-title :padding="1">
        {{ AppName }}
      </q-toolbar-title>
    </div>

    <div class="list no-border platform-delimiter">
      <!--<hr>-->
      <div v-for="group in AppMenu">

        <div class="list-label">
          {{ group.label }}
        </div>
        <q-drawer-link v-for="menu in group.items"
                       :icon="menu.icon" :to="{path: menu.route, exact: true}">
          {{ menu.label }}
        </q-drawer-link>

      </div>
    </div>
  </q-drawer>
</template>

<script type="text/javascript">
  import Common from 'components/common';
  // noinspection NpmUsedModulesInstalled
  import {Events, Utils} from 'quasar';
  import {isUndefined} from 'lodash';

  export default {
    extends: Common,
    name: 'app-drawer',
    data () {
      return {
        isOpen: false,
        width: Utils.dom.viewport().width
      }
    },
    computed: {
      swipeOnly () {
        return this.width < 768;
      },
      forceClose () {
        return !this.isOpen && !this.swipeOnly ? 'force-close' : '';
      }
    },
    mounted () {
      this.isOpen = !this.swipeOnly;

      Events.$on('app-drawer.toggle-left', () => {
        this.toggleLeft();
      });
      Events.$on('app-drawer.close-left', (force) => {
        this.closeLeft(force);
      });
      Events.$on('app-drawer.open-left', (force) => {
        this.openLeft(force);
      });
      window.addEventListener('resize', this.resize, false);
    },
    destroyed () {
      Events.$off('app-drawer.toggle-left');
      Events.$off('app-drawer.close-left');
      Events.$off('app-drawer.open-left');
      window.removeEventListener('resize', this.resize, false);
    },
    methods: {
      resize () {
        this.width = Utils.dom.viewport().width;
      },
      toggleLeft () {
        if (!this.swipeOnly) {
          this.isOpen = !this.isOpen;
        }
        this.$refs.leftDrawer.toggle();
      },
      closeLeft (force) {
        if (this.swipeOnly) {
          this.$refs.leftDrawer.close();
          return;
        }
        if (isUndefined(force)) {
          return;
        }
        if (!this.swipeOnly) {
          this.isOpen = false;
        }
        this.$refs.leftDrawer.close();
      },
      openLeft (force) {
        if (this.swipeOnly) {
          this.$refs.leftDrawer.open();
          return;
        }
        if (isUndefined(force)) {
          return;
        }
        if (!this.swipeOnly) {
          this.isOpen = true;
        }
        this.$refs.leftDrawer.open();
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .drawer
    transition: all .3s
    .drawer-content
      transition: all .3s
    &.force-close
      flex: 0;
      .drawer-content
        transform: translateX(-280px) !important;
</style>