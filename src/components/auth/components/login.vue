<template>
  <div class="app-content">

    <video autoplay loop id="video-background" v-bind:class="opaque" muted>
      <source src="statics/videos/445220196.mp4" type="video/mp4">
    </video>

    <div class="q-panel q-login">

      <div class="q-panel-header">
          <span class="font-play-regular">
            Entrar
          </span>
      </div>

      <div class="q-panel-content">

        <div class="row sm-column">

          <div class="column-left form">

            <div class="field" :options="item('login')" is="f-string"></div>

            <div class="field" :options="item('password')" is="f-password"></div>

            <div class="field" :options="item('remember')" is="f-checkbox"></div>

            <div class="field">
              <button @click="login" class="button primary full-width q-login-button"> Entrar</button>
            </div>

            <div class="field">
              <router-link to="/auth/reset" class="indigo">
                <i class="material-icons">help_outline</i>
                <small>Esqueci minha senha</small>
              </router-link>
            </div>

          </div>

          <div class="column-center">
            <div class="column-divider to-bottom"></div>
            <div class="column-divider-text">ou</div>
            <div class="column-divider to-top"></div>
          </div>

          <div class="column-right">

            <p class="text-faded">Conecte-se com</p>
            <button class="button indigo button-facebook" @click="requestAccess()">
              Facebook
            </button>

            <hr>

            <p class="text-faded">Crie uma nova conta</p>
            <button class="button positive full-width text-left" @click="route('/auth/register')">
              <i class="material-icons">monetization_on</i>
              Conta Sob Controle
            </button>
          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script type="text/javascript">
  // noinspection NpmUsedModulesInstalled
  //  import {Dialog, Toast} from 'quasar';
  import {FormAbstract, FormDefaults, FString, FPassword, FCheckbox} from 'components/common/form';

  // import Lang from 'services/lang';
  // import Auth from '../services/auth';
  import Facebook from '../services/facebook';

  const items = FormDefaults.apply({
    'login': {name: 'login', label: 'Login', autofocus: true},
    'password': {name: 'password', label: 'Senha'},
    'remember': {name: 'remember', label: 'Manter-me conectado'}
  });

  // noinspection ReservedWordAsName
  export default {
    extends: FormAbstract,
    name: 'auth-login',
    components: {
      FString, FPassword, FCheckbox
    },
    data () {
      return {
        items: items,
        isActive: false
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
        // noinspection JSUnresolvedVariable
        const email = this.$route.query.email;
        if (email) {
          this.user.email = email;
        }
        // noinspection JSUnresolvedVariable
        if (this.$refs.autofocus) {
          // noinspection JSUnresolvedVariable
          this.$refs.autofocus.focus();
        }
        // noinspection JSUnresolvedVariable
        this.isActive = true;
      },
      login () {
        this.route('/dashboard');
        // const dialog = (message) => {
        //   Dialog.create({
        //     title: Lang.get('auth', 'dialog'),
        //     message: message + '[meleca]'
        //   });
        // };
        // Auth.login()
        //         .then((response) => {
        //           dialog(Lang.get('auth', 'successful'));
        //         }).catch((response) => {
        //   dialog(Lang.get('auth', 'failed'));
        // });
      },
      requestAccess () {
        Facebook.requestAccess();
      }
    }
  };
</script>