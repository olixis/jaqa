<template>
  <div>
    <button class="button info" @click="route('/dashboard/registration/finances/add')">Vai pro add</button>
  </div>
</template>


<script type="text/javascript">
  import Common from 'components/@common';

  // noinspection ReservedWordAsName
  export default {
    extends: Common,
    name: 'registration-finances',
    data () {
      return {};
    },
    computed: {},
    mounted () {
    },
    methods: {}
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
