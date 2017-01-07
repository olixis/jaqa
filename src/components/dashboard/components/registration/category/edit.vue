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
          <div class="field">
            <button @click="save" class="button primary" :disabled="!isValid"> Salvar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script type="text/javascript">
  import Form from './form-abstract';

  // noinspection ReservedWordAsName
  export default {
    extends: Form,
    name: 'registration-category-add',
    mounted () {
      this.fetch(this.$route.params.id);
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
