<template>
  <div class="app-content">
    <div class="form-container">
      <div class="form-header">
        Categoria
      </div>
      <div class="form-body">
        <div class="form">
          <div class="field" :options="item('name')" is="f-string"></div>
          <div is="f-text" class="field" :options="item('note')"></div>
        </div>
      </div>
      <div class="form-bottom">
        <button @click="save" class="button primary" :disabled="!isValid"> Salvar </button>
        <button @click="route('/')" class="button primary clear"> Fechar </button>
      </div>
    </div>
    <button class="primary circular button-fab" @click="route('/add')">
      <i>add</i>
    </button>
  </div>
</template>


<script type="text/javascript">
  import FormAbstract from './abstract';

  // noinspection ReservedWordAsName
  export default {
    extends: FormAbstract,
    name: 'registration-category-add',
    mounted () {
      this.fetch(this.$route.params.id);
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
