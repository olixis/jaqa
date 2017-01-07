<template>
  <q-tabs class="bg-red q-navigation">
    <q-tab v-for="menu in AppMenu" :route="menu.route">
      {{ menu.label }}
    </q-tab>
  </q-tabs>
</template>

<script type="text/javascript">
  import Common from 'components/@common';

  export default{
    extends: Common,
    name: 'app-header'
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .q-tabs.q-navigation
    color: rgba(234, 224, 224, 1)
    text-shadow: 1px 1px 1px rgba(66, 5, 5, 0.48)
    background-color: rgb(197, 0, 0) !important
    box-shadow: inset 1px 2px 3px rgba(115, 9, 9, 0.55)
    border-radius: 3px 3px 0 0
    .q-tab
      font-family: PlayRegular
      font-size: 20px
    .q-tab:active
      background: #630303
    .q-tab.active
      color: rgba(234, 224, 224, 1)
      border-bottom: 2px solid rgba(234, 224, 224, 1)

  .desktop
    .q-tab
      padding: 15px 25px

  .q-navigation .q-tab
    position relative

  @media (min-width: 768px)
    .q-navigation .q-tab:before
      content ""
      position absolute
      width 100%
      height 100%
      transform scale3d(0, 0, 0)
      transition all
      transition-duration 250ms
      backface-visibility hidden
      background-color rgba(0, 0, 0, 0.12)
      z-index 0
      border-radius 2px
      opacity 0

    .q-navigation .q-tab:hover:before
      transform scale3d(1, 1, 1)
      opacity 1
</style>