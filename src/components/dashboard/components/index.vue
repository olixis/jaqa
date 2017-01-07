<template>
  <div class="app-content dashboard-index">
    <div class="container">
      <div class="row sm-column">
        <div class="width-2of5">
          <div is="account-balance"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Common from 'components/common';
  import AccountBalance from './widgets/account-balance.vue';

  // noinspection ReservedWordAsName
  export default {
    extends: Common,
    components: {
      AccountBalance
    },
    name: 'dashboard-home',
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
.dashboard-index
  .item.item-link
    .item-content, .item-secondary
      font-size: 14px
    >.item-secondary
      width: 90px
    > .item-primary ~ .item-content
      margin-left: 50px;
  .card
    border-radius: 2px
    border: 1px solid #e0e0e0
</style>