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

<script type="text/javascript">
  import FAbstract from './abstract';
  import FLabel from './label';

  export default {
    extends: FAbstract,
    name: 'f-string',
    components: {
      FLabel
    }
  };
</script>