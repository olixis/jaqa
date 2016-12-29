<template>
  <quasar-drawer left-side swipe-only ref="leftDrawer">
    <div class="toolbar light">
      <quasar-toolbar-title :padding="1">
        {{ AppName }}
      </quasar-toolbar-title>
    </div>

    <div class="list no-border platform-delimiter">
      <!--<hr>-->
      <div class="list-label">Geral</div>
      <quasar-drawer-link v-for="menu in AppMenu" :to="menu.route" :icon="menu.icon" exact>
        {{ menu.label }}
      </quasar-drawer-link>
    </div>
  </quasar-drawer>
</template>

<script>
import { Events } from 'quasar'
import { mapGetters } from 'vuex';

export default {
  name: 'app-drawer',
  computed: {
    ...mapGetters(['AppName', 'AppMenu'])
  },
  mounted () {
    Events.$on('app-drawer.open-left', (options) => {
      this.openLeft();
    })
  },
  destroyed () {
    Events.$off('app-drawer.open-left');
  },
  methods: {
    openLeft () {
      this.$refs.leftDrawer.open();
    }
  }
}

</script>