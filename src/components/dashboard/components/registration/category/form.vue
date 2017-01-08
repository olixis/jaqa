<template>
  <div class="app-content">
    <slot name="form-up"></slot>
    <div class="form-container">
      <div class="form-header">
        {{ title }}
      </div>
      <div class="form-body">
        <slot name="form-body"></slot>
      </div>
      <div class="form-bottom">
        <slot name="form-bottom"></slot>
      </div>
    </div>
    <slot name="form-down"></slot>
  </div>
</template>

<script type="text/javascript">
  /**
   * GET /resource - Retrieves a list of resources
   * GET /resource/12 - Retrieves a specific resource
   * POST /resource - Creates a new resource
   * PUT /resource/12 - Updates resource #12
   * PATCH /resource/12 - Partially updates resource #12
   * DELETE /resource/12 - Deletes resource #12
   */
  import {FormAbstract, FDebugger, FString, FText, FPassword, FCheckbox} from 'components/common/crud/form';
  import defaults from './defaults';

  // noinspection ReservedWordAsName
  export default {
    extends: FormAbstract,
    components: {
      FString, FPassword, FCheckbox, FText, FDebugger
    },
    name: 'registration-category-form',
    props: ['title'],
    data () {
      return {
        items: defaults.items,
        root: defaults.root,
        base: defaults.base,
        operation: '',
        method: '',
        undo: true
      };
    },
    computed: {},
    mounted () {},
    methods: {}
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>