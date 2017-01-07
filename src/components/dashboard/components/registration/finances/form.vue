<template>
</template>


<script type="text/javascript">
  import {FormAbstract, FString, FText, FPassword, FCheckbox} from 'components/@common/form';

  import items from './items';

  // noinspection ReservedWordAsName
  export default {
    extends: FormAbstract,
    components: {
      FString, FPassword, FCheckbox, FText
    },
    name: 'registration-finances-form',
    data () {
      return {
        items: items
      };
    },
    computed: {},
    mounted () {
      this.fetch();
    },
    methods: {
      save () {
        alert('Save');
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
