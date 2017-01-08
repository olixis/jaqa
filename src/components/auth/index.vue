<template>
  <app-layout drawer="" header="" left="menu">
    <div slot="content">
      <transition name="fast-slide">
        <router-view></router-view>
      </transition>
    </div>
  </app-layout>
</template>

<script type="text/javascript">
  import AppLayout from 'components/common/layout/index.vue';
  import {mapActions} from 'vuex';

  export default {
    name: 'auth',
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
