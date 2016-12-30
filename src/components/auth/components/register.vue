<template>
  <div class="app-content">

    <div class="container">

      <video autoplay loop id="video-background" v-bind:class="opaque" muted>
        <source src="statics/videos/445220196.mp4" type="video/mp4">
      </video>

      <div class="q-panel q-login">

        <div class="q-panel-header">
          <span class="font-play-regular">
            Nova Conta CSC
          </span>
        </div>

        <div class="q-panel-content">

          <div class="form-group">
            <small class="top-label">Nome</small>
            <input v-model="user.name" class="input" ref="autofocus">
            <div class="input-bar"></div>
          </div>

          <div class="form-group">
            <small class="top-label">E-mail</small>
            <input v-model="user.email" class="input">
            <div class="input-bar"></div>
          </div>

          <div class="form-group">
            <small class="top-label">Senha</small>
            <input type="password" v-model="user.password" class="input">
            <div class="input-bar"></div>
          </div>

          <div class="form-group">
            <small class="top-label">Confirmação da Senha</small>
            <input type="password" v-model="user.repeat" class="input">
            <div class="input-bar"></div>
          </div>

        </div>

        <div class="q-panel-footer">

          <div class="form-group">
            <button @click="register" class="button primary q-login-button"> Começar </button>
          </div>

        </div>
      </div>

    </div>

  </div>
</template>

<script type="javascript">
  import { Dialog, Toast } from 'quasar';

  export default {
    data () {
      return {
        user: {
          name: '', email: '', password: '', repeat: ''
        },
        isActive: false
      }
    },
    mounted () {
      this.fetch();
    },
    computed: {
      opaque () {
        return this.isActive ? 'opaque' : '';
      }
    },
    methods: {
      fetch () {
        if (this.$route.query.email) {
          this.user.email = this.$route.query.email;
        }
        // noinspection JSUnresolvedVariable
        if (this.$refs.autofocus) {
          // noinspection JSUnresolvedVariable
          this.$refs.autofocus.focus();
        }
        // noinspection JSUnresolvedVariable
        this.isActive = true;
      },
      register () {
        Dialog.create({
          title: 'Alert',
          message: 'Modern HTML5 Single Page Application front-end framework on steroids.'
        });
      }
    }
  }
</script>

<style lang="stylus">
</style>