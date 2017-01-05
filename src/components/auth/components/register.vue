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

        <div class="field" :options="item('name')"
             is="f-string" :r="r" @c="c"></div>

        <div class="field" :options="item('email')" v-show="!item('email.hidden')"
             is="f-string" :r="r" @c="c"></div>

        <div class="field half" :options="item('password')"
             is="f-password" :r="r" @c="c"></div>

        <div class="field half" :options="item('repeat')"
             is="f-password" :r="r" @c="c"></div>

        <div class="field half" :options="item('term')"
             is="f-checkbox" :r="r" @c="c"></div>

      </div>

      <div class="q-panel-footer">

        <div class="form-group">
          <button @click="register" class="button primary q-login-button"> Começar</button>
        </div>

      </div>
    </div>

    <pre class="debug" v-if="debug">{{ r }}</pre>

  </div>
</template>

<script type="javascript">
  // noinspection NpmUsedModulesInstalled
  import {Dialog, Toast} from 'quasar';
  import FormDefaults from 'components/@common/form/defaults';
  import FormAbstract from 'components/@common/form';
  import FString from 'components/@common/form/fields/string';
  import FPassword from 'components/@common/form/fields/password';
  import FCheckbox from 'components/@common/form/fields/checkbox';

  const items = FormDefaults.apply({
    'name': {name: 'name', label: 'Nome', autofocus: true},
    'email': {name: 'email', label: 'E-mail'},
    'password': {name: 'password', label: 'Senha'},
    'repeat': {name: 'repeat', label: 'Confirmação da Senha'},
    'term': {name: 'term', label: 'Aceito os termos blá blá, blá', defaults: false}
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
        items: items,
        debug: true
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
          this.record('email', this.$route.query.email);
        }
        // noinspection JSUnresolvedVariable
        this.isActive = true;
      },
      register () {
        console.log(!this.item('email.hidden'));
        this.item('email.hidden', !this.item('email.hidden'));
        this.item('name.disabled', !this.item('name.disabled'));
        // Dialog.create({
        //   title: 'Alerts',
        //   message: JSON.stringify(this.r)
        // });
      }
    }
  }
</script>
