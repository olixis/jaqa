<template>
  <div class="f-text">
    <div is="f-label" :label="label" :validator="option('validator')" :error="error"></div>
    <div class="form-input">
      <textarea v-bind:class="['input', error ? 'has-error' : '']" ref="autofocus" :disabled="disabled"
                v-model="value"></textarea>
      <div class="input-bar"></div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import FAbstract from './abstract';
  import FLabel from './label';

  export default {
    extends: FAbstract,
    name: 'f-text',
    components: {
      FLabel
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .f-text
    textarea
      height: 100px
    .input-bar:before, .input-bar:after
      top: -4px;
</style>
