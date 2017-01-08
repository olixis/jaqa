<template>
  <form-abstract title="Category">
    <div slot="form-body">
      <div class="form">
        <div class="field" :options="item('name')" is="f-string"></div>
        <div is="f-text" class="field" :options="item('note')"></div>
      </div>
    </div>
    <div slot="form-bottom">
      <button @click="save" class="button primary" :disabled="!isValid"> Salvar</button>
      <button @click="route('/')" class="button primary clear"> Fechar </button>
    </div>
    <div slot="form-down">
      <button class="primary circular button-fab" @click="route('/create')">
        <i>add</i>
      </button>
      <div is="f-debugger" :items="items"></div>
    </div>
  </form-abstract>
</template>

<script type="text/javascript">
  import FormAbstract from './form';

  // noinspection ReservedWordAsName
  export default {
    extends: FormAbstract,
    components: {
      FormAbstract
    },
    data () {
      return {
        operation: 'update',
        undo: true
      };
    },
    name: 'registration-category-edit',
    mounted () {
      this.fetch(this.$route.params.id);
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
