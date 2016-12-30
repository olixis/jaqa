<template>
  <q-drawer left-side swipe-only ref="leftDrawer">
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