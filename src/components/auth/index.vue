<template>
  <app-layout drawer="false"></app-layout>
</template>

<script type="javascript">
  import AppLayout from 'components/@common/layout/index.vue';
  import { mapActions } from 'vuex';

  export default {
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
