<template>
  <app-layout drawer="" header="true" left="menu"></app-layout>
</template>

<script type="text/javascript">
  // noinspection NpmUsedModulesInstalled
  import { mapActions } from 'vuex';
  import Common from 'components/common';
  import AppLayout from 'components/common/layout/index.vue';

  export default {
    extends: Common,
    name: 'home',
    components: {
      AppLayout
    },
    mounted () {
      const menu = [
        {'route': '/home', 'label': 'Home'},
        {'route': '/home/resources', 'label': 'Recursos'},
        {'route': '/home/apps', 'label': 'Aplicativos'},
        {'route': '/blog/index', 'label': 'Blog'},
        {'route': '/blog/testimonials', 'label': 'Depoimentos'},
        {'route': '/home/who-we-are', 'label': 'Quem Somos'}
      ];
      // noinspection JSValidateTypes
      this.changeMenu(menu);
    },
    methods: {
      ...mapActions(['changeMenu'])
    }
  };
</script>
