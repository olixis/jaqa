<template>
  <div class="container">
    <div class="layout-padding">
      <h4>Resources of {{ AppName }}</h4>
    </div>
  </div>
</template>

<script type="text/javascript">
  import HomeAbstract from './abstract';

  export default {
    extends: HomeAbstract,
    name: 'home-resources',
    data () {
      return {
        label: 'Recursos'
      }
    }
  };
</script>