<template>
  <div class="container">
    Resources
  </div>
</template>

<script type="javascript">
  import homeResources from './@component';

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