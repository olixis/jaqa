<template>
  <div class="app-toolbar">
    <span class="app-toolbar-title" @click="route('/home')">
      {{ AppName }}
    </span>
    <div v-if="false">
      <q-search v-model="searchModel" class="primary"></q-search>
    </div>

    <div v-show="hasMenu" class="app-toolbar-left app-toolbar-buttons">
      <button @click="route('/auth/login')">
        <i class="material-icons">&#xE7FD;</i> Entrar
      </button>
      <button @click="route('/fale-conosco')">
        <i class="material-icons">help_outline</i> Fale Conosco
      </button>
    </div>

    <div v-show="hasPopover" class="app-toolbar-left">
      <button class="material-icons" ref="app-toolbar-popover">
        <i>more_vert</i>
      </button>
      <q-popover anchor-ref="app-toolbar-popover" ref="appToolbarPopover">
        <div class="list highlight app-popover">

          <div class="item item-link item-delimiter" v-for="menu in popover" @click="openPopover(menu)">
            <div class="item-content"> {{ menu.label }}</div>
          </div>

        </div>
      </q-popover>
    </div>
  </div>
</template>

<script type="text/javascript">
  // noinspection NpmUsedModulesInstalled
  import {isFunction} from 'lodash';
  import Common from 'components/@common';

  export default {
    extends: Common,
    name: 'app-toolbar',
    props: ['left', 'popover'],
    computed: {
      hasPopover () {
        return this.left === 'popover' || this.left === 'all';
      },
      hasMenu () {
        return this.left === 'menu' || this.left === 'all';
      }
    },
    methods: {
      /**
       * @param menu
       */
      openPopover (menu) {
        if (isFunction(menu.callback)) {
          menu.callback();
        }
        this.$refs.appToolbarPopover.close();
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body.desktop
    .q-header
      padding: 0 30px

  .font-play .toolbar-title
    font-family: PlayRegular
    font-size: 1.6rem
    text-shadow: 1px 1px 1px rgb(202, 183, 17)

  .layout-header .app-toolbar button:hover i, .layout-footer .app-toolbar button:hover i
    -webkit-animation: none !important
    animation: none !important

  .toolbar button:active:not(.disabled)
    color: #bfae12

  .app-toolbar-title
    cursor: pointer

  .app-toolbar-buttons
    padding: 0 20px 0 0
    button
      font-size: 16px
      position: relative
      padding: 0.4rem
      i
        font-size: 1rem
        margin: 0 0 0 .6rem

  .app-toolbar-left
    right: 0
    top: 10px
    position: absolute

  .app-popover
    min-width: 150px
    max-height: 500px

  .app-popover .item-content
    text-shadow: none

  @media (max-width: 768px)
    .app-toolbar-buttons
      display: none

  @media (min-width: 768px)
    .app-toolbar-buttons
      button:before
        content: ""
        position: absolute
        top: 0
        width: 100%
        height: 100%
        transform: scale3d(0, 0, 0)
        transition: all
        transition-duration: 250ms
        backface-visibility: hidden
        background-color: rgba(0, 0, 0, 0.12)
        z-index: 0
        border-radius: 2px
        opacity: 0
      button:hover:before
        transform: scale3d(1, 1, 1)
        opacity: 1
</style>
