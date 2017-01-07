<template>
  <div>
    <app-layout drawer="true" header="" left="popover" :popover="popover"></app-layout>
  </div>
</template>

<script type="text/javascript">
  // noinspection NpmUsedModulesInstalled
  import {mapActions} from 'vuex';
  // noinspection NpmUsedModulesInstalled
  import Common from 'components/@common';
  import AppLayout from 'components/@common/layout/index.vue';

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
          label: 'Principal',
          items: [
            {route: '/dashboard/home', icon: 'build', label: 'Home'},
            {route: '/dashboard/expenses', icon: 'build', label: 'Despesas'},
            {route: '/dashboard/revenues', icon: 'build', label: 'Receitas'}
          ]
        },
        {
          label: 'Gestão',
          items: [
            {route: '/dashboard/budget', icon: 'build', label: 'Orçamentos'},
            {route: '/dashboard/simulation', icon: 'build', label: 'Simulação'}
          ]
        },
        {
          label: 'Cadastro',
          items: [
            {route: '/dashboard/registration/finances', icon: 'build', label: 'Financeiro'},
            {route: '/dashboard/registration/auxiliar', icon: 'build', label: 'Auxiliar'}
          ]
        }
      ];
      // noinspection JSValidateTypes
      this.changeMenu(menu);
    },
    methods: {
      ...mapActions(['changeMenu'])
    }
  };
</script>
