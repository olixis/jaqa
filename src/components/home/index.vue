<template>
  <app-layout drawer="" header="true" left="menu">
    <div slot="content">
      <transition name="fast-slide">
        <router-view></router-view>
      </transition>
    </div>
  </app-layout>
</template>

<script type="text/javascript">
  // noinspection NpmUsedModulesInstalled
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
        {'route': '/home/resources', 'label': 'Resources'},
        {'route': '/home/apps', 'label': 'Apps'},
        {'route': '/blog/index', 'label': 'Blog'},
        {'route': '/blog/testimonials', 'label': 'Testimonials'},
        {'route': '/home/who-we-are', 'label': 'Us'}
      ];
      // noinspection JSValidateTypes
      this.changeMenu(menu);
    }
  };
</script>
