<template>
  <div class="app-content app-auth">

    <video autoplay loop id="video-background" :class="opaque" muted>
      <source src="statics/videos/auth.mp4" type="video/mp4">
    </video>

    <div class="q-panel q-login">

      <div class="q-panel-header">
          <span class="font-play-regular">
            Sig in
          </span>
      </div>

      <div class="q-panel-content">

        <div class="row sm-column">

          <div class="column-left form">

            <div class="field" :options="item('login')" is="f-string"></div>

            <div class="field" :options="item('password')" is="f-password"></div>

            <div class="field" :options="item('remember')" is="f-checkbox"></div>

            <div class="field">
              <button @click="authLogin" class="button primary full-width q-login-button" :disabled="!isValid">
                Log In
              </button>
            </div>

            <div class="field">
              <router-link to="/auth/reset" class="indigo">
                <i class="material-icons">help_outline</i>
                <small>I forgotten my password</small>
              </router-link>
            </div>

          </div>

          <div class="column-center">
            <div class="column-divider to-bottom"></div>
            <div class="column-divider-text">ou</div>
            <div class="column-divider to-top"></div>
          </div>

          <div class="column-right">

            <p class="text-faded">Connect with</p>
            <button class="button indigo button-facebook" @click="requestAccess()">
              Facebook
            </button>

            <hr>

            <p class="text-faded">Create a new account</p>
            <button class="button positive full-width text-left" @click="route('/auth/register')">
              <i class="material-icons">monetization_on</i>
              {{ AppName }}
            </button>
          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script type="text/javascript">
  import {FormDefaults, FString, FPassword, FCheckbox} from 'components/common/form';
  import FormAbstract from './abstract';

  import Facebook from '../services/facebook';

  const items = FormDefaults.apply({
    'login': {name: 'login', label: 'User', validator: 'email', autofocus: true},
    'password': {name: 'password', label: 'Password', validator: 'password'},
    'remember': {name: 'remember', label: 'Keep me connected'}
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
        items
      }
    },
    methods: {
      authLogin () {
        this
          .action('login')
          .then(() => {
            this.route('/dashboard/home');
          });
      },
      authRequestAccess () {
        Facebook.requestAccess();
      }
    }
  };
</script>