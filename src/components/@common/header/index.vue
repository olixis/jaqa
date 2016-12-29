<template>
  <quasar-tabs class="bg-red quasar-navigation">
    <quasar-tab v-for="menu in AppMenu" :route="menu.route">
      {{ menu.label }}
    </quasar-tab>
  </quasar-tabs>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'app-header',
  computed: {
    ...mapGetters(['AppMenu'])
  }
}
</script>

<style lang="stylus" scoped>
  .quasar-tabs.quasar-navigation
    color: rgba(234, 224, 224, 1)
    text-shadow :1px 1px 1px rgba(66, 5, 5, 0.48)
    background-color: rgb(197, 0, 0) !important
    box-shadow: inset 1px 2px 3px rgba(115, 9, 9, 0.55)
    border-radius: 3px 3px 0 0
    .quasar-tab
      font-family: PlayRegular
      font-size: 20px
    .quasar-tab:active
      background: #630303
    .quasar-tab.active
      color: rgba(234, 224, 224, 1)
      border-bottom: 2px solid rgba(234, 224, 224, 1)

  .desktop
    .quasar-tab
      padding: 15px 25px

  .quasar-navigation .quasar-tab
    position relative

  @media (min-width: 768px)
    .quasar-navigation .quasar-tab:before
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

    .quasar-navigation .quasar-tab:hover:before
      transform scale3d(1, 1, 1)
      opacity 1
</style>