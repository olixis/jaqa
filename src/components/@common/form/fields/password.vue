<template>
  <div>
    <div class="form-label">{{ label }}</div>
    <div class="form-input">
      <input class="input" type="password" v-model="value" :disabled="disabled" @keyup="change">
      <div class="input-bar"></div>
    </div>
  </div>
</template>

<script>
  import abstract from './abstract';

  export default {
    name: 'f-password',
    extends: abstract
  }
</script>

<style>
</style>