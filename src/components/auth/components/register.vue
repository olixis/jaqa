<template>
  <div class="app-content app-auth">

    <video autoplay loop id="video-background" :class="opaque" muted>
      <source src="statics/videos/auth.mp4" type="video/mp4">
    </video>

    <div class="q-panel q-login">

      <div class="q-panel-header">
          <span class="font-play-regular">
            Create a New Account
          </span>
      </div>

      <div class="q-panel-content form p-20-30">

        <div class="field" :options="item('name')" is="f-string"></div>

        <div class="field" :options="item('email')" v-show="!item('email.hidden')" is="f-string"></div>

        <div class="field half" :options="item('password')" is="f-password"></div>

        <div class="field half" :options="item('repeat')" is="f-password"></div>

        <div class="field" :options="item('term')" is="f-checkbox"></div>

      </div>

      <div class="q-panel-footer">

        <div class="form-group">

          <router-link to="/auth/reset" class="indigo pull-left">
            <i class="material-icons">help_outline</i>
            <small>I forgotten my password</small>
          </router-link>

          <button class="button primary clear" @click="route('/auth/login')">
            I already have an account
          </button>

          <button @click="authRegister" class="button primary q-login-button" :disabled="!isValid">
            Create Account
          </button>
        </div>

      </div>
    </div>

  </div>
</template>

<script type="text/javascript">
  import {FormDefaults, FString, FPassword, FCheckbox} from 'components/common/form';
  import FormAbstract from './abstract';

  const items = FormDefaults.apply({
    'name': {label: 'Name', autofocus: true, validator: 'required'},
    'email': {label: 'E-mail', validator: 'email'},
    'password': {label: 'Password', validator: 'password'},
    'repeat': {label: 'Confirm Password', validator: 'same:password'},
    'term': {label: 'I accept the terms blah blah blah', type: 'boolean', defaults: true}
  });

  // noinspection ReservedWordAsName
  export default {
    extends: FormAbstract,
    name: 'auth-register',
    components: {
      FString, FPassword, FCheckbox
    },
    data () {
      return {
        items
      }
    },
    methods: {
      authRegister () {
        this
          .action('register')
          .then(() => {
            this.route('/dashboard/home');
          });
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>