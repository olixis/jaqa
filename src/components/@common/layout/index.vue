<template>
  <quasar-layout>

    <div slot="header" class="toolbar">
      <button v-if="hasDrawer" class="hide-on-drawer-visible" @click="openDrawer()">
        <i>menu</i>
      </button>
      <quasar-toolbar-title :padding="1" class="font-play">
        <app-toolbar :popover="false"></app-toolbar>
      </quasar-toolbar-title>
    </div>

    <div slot="navigation" class="desktop-only md bg lg">
      <div class="container">
        <app-header></app-header>
      </div>
    </div>

    <app-drawer v-if="hasDrawer"></app-drawer>

    <router-view class="app-router-view"></router-view>

  </quasar-layout>
</template>

<script type="javascript">
  import { Events } from 'quasar';

  import AppToolbar from 'components/@common/toolbar/index.vue';
  import AppHeader from 'components/@common/header/index.vue';
  import AppDrawer from 'components/@common/drawer/index.vue';

  export default {
    name: 'home',
    props: ['drawer'],
    components: {
      AppToolbar, AppHeader, AppDrawer
    },
    computed: {
      hasDrawer () {
        // noinspection JSUnresolvedVariable
        return this.drawer === 'true';
      }
    },
    methods: {
      openDrawer () {
        Events.$emit('app-drawer.open-left');
      }
    }
  };
</script>

<style lang="stylus">
  .toolbar.light, .font-play-regular
    font-family: PlayRegular
</style>

