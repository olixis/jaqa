<template>
  <div class="app-content">
    <div class="form-container">
      <div class="form-header">
        Categoria
      </div>
      <div class="form-body">
        <slot name="form-body"></slot>
      </div>
      <div class="form-bottom">
        <slot name="form-bottom"></slot>
      </div>
    </div>
    <button class="primary circular button-fab" @click="route('/add')">
      <i>add</i>
    </button>
  </div>
</template>


<script type="text/javascript">
  import {FormAbstract} from 'components/common/form';

  // noinspection ReservedWordAsName
  export default {
    extends: FormAbstract,
    name: 'registration-category-form',
    data () {
      return {
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
