<template>
  <div>
    <div is="f-label" :label="label" :validator="option('validator')" :error="error"></div>
    <div class="form-input">
      <input v-bind:class="['input', error ? 'has-error' : '']" ref="autofocus" :disabled="disabled"
             v-model="value" type="text">
      <div class="input-bar"></div>
    </div>
  </div>
</template>

<script>
  import abstract from './abstract';
  import FLabel from './label';

  export default {
    name: 'f-string',
    extends: abstract,
    components: {
      FLabel
    }
  }
</script>