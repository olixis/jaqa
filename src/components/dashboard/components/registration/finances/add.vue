<template>
  <div class="app-content">
    <div class="form">

      <div class="field" :options="item('login')" is="f-string"></div>

      <div class="field" :options="item('password')" is="f-password"></div>

      <div class="field" :options="item('remember')" is="f-checkbox"></div>

      <div is="f-text" class="field" :options="item('observacao')"></div>

      <div class="field">
        <button @click="save" class="button primary"> Salvar </button>
      </div>

    </div>
  </div>
</template>


<script type="text/javascript">
  import Form from './form';

  // noinspection ReservedWordAsName
  export default {
    extends: Form,
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
