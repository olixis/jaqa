<template>
  <q-drawer left-side :swipe-only="swipeOnly" ref="leftDrawer" v-bind:class="[forceOpen]">
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
        <div class="item item-link drawer-closer" v-for="menu in group.items" @click="route(menu.route)">
          <i class="item-primary">{{ menu.icon }}</i>
          <div class="item-content">
            {{ menu.label }}
          </div>
        </div>

      </div>
    </div>
  </q-drawer>
</template>

<script type="text/javascript">
  import Common from 'components/common';
  // noinspection NpmUsedModulesInstalled
  import {Events, Utils} from 'quasar';

  export default {
    extends: Common,
    name: 'app-drawer',
    props: ['drawer'],
    data () {
      return {
        isOpen: false
      }
    },
    computed: {
      swipeOnly () {
        return this.drawer === 'swipe-only';
      },
      forceOpen () {
        return (!this.swipeOnly && this.isOpen && Utils.dom.viewport().width > 600) ? 'force-open' : '';
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

<style lang="stylus" rel="stylesheet/stylus">
  .drawer
    transition: all .3s
    .drawer-content
      transition: all .3s
    &.force-open
      flex: 0;
      .drawer-content
        transform: translateX(-280px) !important;
</style>