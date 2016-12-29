<template>
  <div class="container">
    <br/>

    <table class="quasar-table striped bordered">
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

<script type="javascript">
  import { Platform } from 'quasar';
  import homeApps from './@component';

  export default {
    name: 'home-apps',
    extends: {
      ...homeApps
    },
    data () {
      return {
        platform: Platform.is,
        label: 'Aplicativos'
      }
    }
  };
</script>