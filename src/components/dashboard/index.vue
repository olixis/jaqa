<template>
  <div>
    <app-layout drawer="true" header="" left="popover" :popover="popover">
      <div slot="content">
        <router-view></router-view>
      </div>
    </app-layout>
  </div>
</template>

<script type="text/javascript">
  // noinspection NpmUsedModulesInstalled
  import Common from 'components/common';
  import AppLayout from 'components/common/layout/index.vue';

  // noinspection ReservedWordAsName
  export default {
    extends: Common,
    name: 'dashboard',
    data () {
      return {
        popover: [
          {
            label: 'Logout',
            callback: () => {
              this.route('/auth/logout');
            }
          }
        ]
      };
    },
    components: {
      AppLayout
    },
    mounted () {
      const menu = [
        {
          label: 'General',
          items: [
            {route: '/dashboard/home', icon: 'build', label: 'Home'},
            {route: '/dashboard/registration/category', icon: 'build', label: 'Categories'}
          ]
        }
      ];
      // noinspection JSValidateTypes
      this.changeMenu(menu);
    }
  };
</script>
