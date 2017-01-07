<template>
  <div class="app-content">
    <button class="button info" @click="route('./add')">Vai pro add</button>
    <br>
    <br>
    <button class="button info" @click="route('./edit/2')">Vai pro edit</button>
  </div>
</template>


<script type="text/javascript">
  import Common from 'components/common';

  // noinspection ReservedWordAsName
  export default {
    extends: Common,
    name: 'registration-category',
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
