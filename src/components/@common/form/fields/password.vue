<template>
  <div>
    <div is="f-label" :label="label" :validator="option('validator')" :error="error"></div>
    <div class="form-input">
      <input v-bind:class="['input', error ? 'has-error' : '']" ref="autofocus" :disabled="disabled"
             v-model="value" type="password">
      <div class="input-bar"></div>
    </div>
  </div>
</template>

<script>
  import abstract from './abstract';
  import FLabel from './label';

  export default {
    name: 'f-password',
    extends: abstract,
    components: {
      FLabel
    }
  };
</script>