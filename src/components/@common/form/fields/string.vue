<template>
  <div>
    <div class="form-label">{{ label }}</div>
    <div class="form-input">
      <input class="input" ref="autofocus" type="text" v-model="value" :disabled="disabled" @keyup="change">
      <div class="input-bar"></div>
    </div>
  </div>
</template>

<script>
  import abstract from './abstract';

  export default {
    name: 'f-string',
    extends: abstract
  }
</script>