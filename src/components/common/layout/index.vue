<template>
  <q-layout>

    <div slot="header" class="toolbar">
      <button v-if="hasDrawer" @click="toggleDrawer()">
        <i>menu</i>
      </button>
      <q-toolbar-title :padding="1" class="font-play">
        <app-toolbar :left="left" :popover="popover"></app-toolbar>
      </q-toolbar-title>
    </div>

    <div slot="navigation" class="desktop-only md bg lg">
      <div class="container">
        <app-header v-if="hasHeader"></app-header>
      </div>
    </div>

    <app-drawer v-if="hasDrawer" :drawer="drawer"></app-drawer>

    <transition name="fast-slide">
      <router-view class="app-router-view"></router-view>
    </transition>

  </q-layout>
</template>

<script type="text/javascript">
  // noinspection NpmUsedModulesInstalled
  import {Events} from 'quasar';

  import Common from 'components/common';
  import AppToolbar from 'components/common/toolbar/index.vue';
  import AppHeader from 'components/common/header/index.vue';
  import AppDrawer from 'components/common/drawer/index.vue';

  export default{
    extends: Common,
    name: 'app-layout',
    props: ['drawer', 'header', 'left', 'popover'],
    components: {
      AppToolbar, AppHeader, AppDrawer
    },
    computed: {
      hasDrawer () {
        return !!this.drawer;
      },
      hasHeader () {
        return !!this.header;
      }
    },
    methods: {
      toggleDrawer () {
        Events.$emit('app-drawer.toggle-left');
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .toolbar.light, .font-play-regular
    font-family: PlayRegular

  .app-router-view
    width: 100%

  .toolbar
    button
      box-shadow: none
</style>

