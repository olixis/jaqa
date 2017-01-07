<template>
  <div class="container">
    Resources
  </div>
</template>

<script type="javascript">
  import homeResources from './abstract';

  export default {
    name: 'home-resources',
    extends: {
      ...homeResources
    },
    data () {
      return {
        label: 'Recursos'
      }
    }
  };
</script>