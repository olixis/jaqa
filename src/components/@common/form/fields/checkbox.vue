<template>
  <div>
    <label class="checkbox">
      <q-checkbox v-model="value" :disable="disabled"></q-checkbox>
      <span class="form-label">{{ label }}</span>
    </label>
  </div>
</template>

<script type="text/javascript">
  import FAbstract from './abstract';

  export default {
    extends: FAbstract,
    name: 'f-checkbox',
    methods: {
      parse (value) {
        return !!value;
      }
    }
  };
</script>