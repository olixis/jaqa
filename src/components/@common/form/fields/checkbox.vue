<template>
  <div>
    <label class="checkbox">
      <q-checkbox v-model="value" :disable="disabled"></q-checkbox>
      <span class="form-label">{{ label }}</span>
    </label>
  </div>
</template>

<script>
  import abstract from './abstract';

  export default {
    name: 'f-checkbox',
    extends: abstract,
    methods: {
      parse (value) {
        return !!value;
      }
    }
  };
</script>