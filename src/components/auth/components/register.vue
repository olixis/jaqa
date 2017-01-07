<template>
  <div class="app-content">

    <video autoplay loop id="video-background" v-bind:class="opaque" muted>
      <source src="statics/videos/445220196.mp4" type="video/mp4">
    </video>

    <div class="q-panel q-login">

      <div class="q-panel-header">
          <span class="font-play-regular">
            Nova Conta CSC
          </span>
      </div>

      <div class="q-panel-content form p-20-30">

        <div class="field" :options="item('name')" is="f-string"></div>

        <div class="field" :options="item('email')" v-show="!item('email.hidden')" is="f-string"></div>

        <div class="field half" :options="item('password')" is="f-password"></div>

        <div class="field half" :options="item('repeat')" is="f-password"></div>

        <div class="field half" :options="item('term')" is="f-checkbox"></div>

      </div>

      <div class="q-panel-footer">

        <div class="form-group">
          <button @click="register" class="button primary q-login-button" :disabled="!isValid"> Começar</button>
        </div>

      </div>
    </div>

    <pre class="debug" v-if="debug">{{ errors }}</pre>

  </div>
</template>

<script type="javascript">
  // noinspection NpmUsedModulesInstalled
  import {Dialog, Toast} from 'quasar';
  import { FormAbstract, FormDefaults, FString, FPassword, FCheckbox } from 'components/@common/form';

  const items = FormDefaults.apply({
    'name': {label: 'Nome', autofocus: true, validator: 'required'},
    'email': {label: 'E-mail', validator: 'email'},
    'password': {label: 'Senha', validator: 'password'},
    'repeat': {label: 'Confirmação da Senha', validator: 'same:password'},
    'term': {label: 'Aceito os termos blá blá, blá', type: 'boolean', defaults: true}
  });

  export default {
    extends: FormAbstract,
    name: 'auth-register',
    components: {
      FString, FPassword, FCheckbox
    },
    data () {
      return {
        isActive: false,
        root: 'products',
        items: items
      }
    },
    mounted () {
      this.fetch();
      this.load();
    },
    computed: {
      opaque () {
        return this.isActive ? 'opaque' : '';
      }
    },
    methods: {
      load () {
        if (this.$route.query.email) {
          this.set('email', this.$route.query.email);
        }
        // noinspection JSUnresolvedVariable
        this.isActive = true;
      },
      /**
       * @param name
       * @param value
       * @returns {object}
       */
      change (name, value) {
        // this.record['name'] = this.record['name'] === 'William' ? '' : 'William';
        // this.item('email.hidden', !this.item('email.hidden'));
      },
      register () {
        this.item('email.hidden', !this.item('email.hidden'));
        this.item('name.disabled', !this.item('name.disabled'));
        this
          .action('register')
            .then(() => {
              this.route('/dashboard/home');
            });
      }
    }
  }
</script>
