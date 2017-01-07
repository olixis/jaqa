<template>
  <div>
    <app-layout drawer="true" header="" left="popover"></app-layout>

    <div slot="popover">
      <div class="item item-link item-delimiter" v-for="n in 3" @click="$refs.app_toolbar_popover.close()">
        <div class="item-content">
          Label
        </div>
      </div>
    </div>
  </div>
</template>

<script type="javascript">
  // noinspection NpmUsedModulesInstalled
  import {mapActions} from 'vuex';
  import AppLayout from 'components/@common/layout/index.vue';

  export default {
    name: 'dashboard',
    components: {
      AppLayout
    },
    mounted () {
    },
    methods: {
    }
  };
</script>
