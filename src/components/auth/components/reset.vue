<template>
  <div class="app-content app-auth">

    <video autoplay loop id="video-background" :class="opaque" muted>
      <source src="statics/videos/auth.mp4" type="video/mp4">
    </video>

    <div class="q-panel q-login">

      <div class="q-panel-header">
          <span class="font-play-regular">
            Reset Password
          </span>
      </div>

      <div class="q-panel-content form p-20-30">

        <div class="field" :options="item('email')" is="f-string"></div>

      </div>

      <div class="q-panel-footer">

        <div class="form-group">

          <button class="button primary clear" @click="route('/auth/register')">
            I don't have an account
          </button>

          <button @click="authReset" class="button primary q-login-button" :disabled="!isValid">
            Send Reset Link
          </button>
        </div>

      </div>
    </div>

  </div>
</template>

<script type="text/javascript">
  import {FormDefaults, FString} from 'components/common/form';
  import FormAbstract from './abstract';

  const items = FormDefaults.apply({
    'email': {label: 'E-mail', validator: 'email'}
  });

  // noinspection ReservedWordAsName
  export default {
    extends: FormAbstract,
    name: 'auth-reset',
    components: {
      FString
    },
    data () {
      return {
        items: items
      }
    },
    methods: {
      authReset () {
        this
          .action('reset')
          .then(() => {
            this.set('email', '');
            this.reset();
            this.alert('Reset Password', 'We sent you a reset link.<br>Check your email and follow the instructions');
          });
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>