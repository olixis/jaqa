<template>
  <div class="container">
    <br/>

    <table class="q-table striped bordered">
      <thead>
      <tr>
        <th class="text-left">Property</th>
        <th class="text-left">Value</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="(value, Property) in platform">
        <td>{{ Property }}</td>
        <td>{{ value }}</td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script type="text/javascript">
  // noinspection NpmUsedModulesInstalled
  import { Platform } from 'quasar';
  import HomeAbstract from './abstract';

  export default {
    extends: HomeAbstract,
    name: 'home-apps',
    data () {
      return {
        platform: Platform.is,
        label: 'Aplicativos'
      }
    }
  };
</script>