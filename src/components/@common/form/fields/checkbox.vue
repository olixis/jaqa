<template>
  <div>
    <label class="checkbox">
      <q-checkbox v-model="checked" :disable="disabled"></q-checkbox>
      <span class="form-label">{{ label }}</span>
    </label>
  </div>
</template>

<script>
  import abstract from './abstract';

  export default {
    name: 'f-checkbox',
    extends: abstract,
    data () {
      return {
        checked: false
      }
    },
    watch: {
      checked () {
        this.change(this.checked);
      },
      value () {
        this.checked = !!this.value;
      }
    }
  };
</script>

<style>
</style>