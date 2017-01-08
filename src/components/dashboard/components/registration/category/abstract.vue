<template></template>

<script>
  import {FormAbstract, FString, FText, FPassword, FCheckbox} from 'components/common/form';
  import defaults from './defaults';

  // noinspection ReservedWordAsName
  export default {
    extends: FormAbstract,
    components: {
      FString, FPassword, FCheckbox, FText
    },
    name: 'registration-category-form',
    data () {
      return {
        items: defaults.items,
        root: '',
        param: '',
        base: defaults.base,
        undo: true
      };
    },
    computed: {},
    mounted () {},
    methods: {
      /**
       * @param record
       */
      undoing (record) {
        this.load(true);
        return new Promise((resolve) => {
          window.setTimeout(() => {
            console.log(record);
            this.load(false);
            resolve(true);
          }, 1000)
        });
      },
      /**
       */
      save () {
        this
          .load(true)
          .action(this.param)
          .then((record) => {
            this.success('Tudo certo!', record);
          })
          .catch();
      },
      /**
       * @param message
       * @param record
       */
      success (message, record) {
        this.load(false);
        let undo = null;
        if (this.undo) {
          undo = () => {
            return this.undoing(record);
          }
        }
        this.toast(message, undo);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>