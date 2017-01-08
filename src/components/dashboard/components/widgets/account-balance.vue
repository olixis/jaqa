<template>

  <div class="card">
    <div class="card-title">
      Balance of the day
    </div>
    <div class="list no-border">

      <div class="item item-link">
        <i class="item-primary material-icons">trending_up</i>
        <div class="item-content has-secondary">
          Cash in hand
        </div>
        <span class="item-secondary">R$ 500,00</span>
      </div>

    </div>
  </div>

</template>


<script type="text/javascript">
  import Common from 'components/common';

  // noinspection ReservedWordAsName
  export default {
    extends: Common,
    name: 'account-balance',
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
