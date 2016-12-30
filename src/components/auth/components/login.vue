<template>
  <div class="app-content">

    <video autoplay loop id="video-background" v-bind:class="opaque" muted>
      <source src="statics/videos/445220196.mp4" type="video/mp4">
    </video>

    <div class="q-panel q-login">
      <!-- login -->
      <div class="q-panel-header">
          <span class="font-play-regular">
            Entrar
          </span>
      </div>

      <div class="q-panel-content">

        <div class="row sm-column">

          <div class="column-left width-2of5 order-3">

            <div class="form-group">
              <small class="top-label">E-mail</small>
              <input v-model="user.email" class="input" ref="autofocus">
              <div class="input-bar"></div>
            </div>

            <div class="form-group">
              <small class="top-label">Senha</small>
              <input type="password" v-model="user.password" class="input">
              <div class="input-bar"></div>
            </div>

            <div class="form-group">
              <router-link to="/auth/reset" class="indigo">
                <i class="material-icons">help_outline</i> <small>Esqueci minha senha</small>
              </router-link>
            </div>

            <div class="form-group">
              <button @click="login" class="button primary full-width q-login-button"> Entrar</button>
            </div>

            <div class="form-group">
              <label class="checkbox">
                <q-checkbox v-model="user.remember"></q-checkbox>
                Manter-me conectado
              </label>
            </div>

          </div>

          <div class="column-center width-1of5 order-2">
            <div class="column-divider to-bottom"></div>
            <div class="column-divider-text">ou</div>
            <div class="column-divider to-top"></div>
          </div>

          <div class="column-right width-2of5 order-1">

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

<script type="javascript">
  import {Dialog, Toast} from 'quasar';
  import Facebook from './facebook';

  export default {
    name: 'auth-login',
    data () {
      return {
        user: {
          email: '', password: '', remember: false
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
      login () {
        Dialog.create({
          title: 'Alert',
          message: 'Modern HTML5 Single Page Application front-end framework on steroids.'
        });
      },
      requestAccess () {
        Facebook.requestAccess();
      },
      route (path) {
        this.$router.push({path})
      }
    }
  }
</script>

<style lang="stylus">

  .q-login
    max-width: 650px
    margin: 30px auto
    box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 6px, rgba(0, 0, 0, 0.227451) 0px 3px 6px
    .q-login-button
      padding 0 30px
    .column-left, .column-right
      min-width: 48%
      padding: 10px 20px
    .column-center
      max-width: 4%
      text-align: center
    .column-divider-text
      font-size: 12px
      color: #949494
      padding: 5px 0;
    .column-divider
      height: 40%
      width: 1px
      display: inline-block
      &.to-bottom
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(224, 224, 224), rgb(224, 224, 224));
      &.to-top
        background-image: linear-gradient(to bottom, rgb(224, 224, 224), rgb(224, 224, 224), rgba(0, 0, 0, 0));
    hr
      margin: 20px 0;
      border: 0;
      height: 1px;
      background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(224, 224, 224), rgba(0, 0, 0, 0));

  .button.button-facebook
    background: #5768c5 url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAABI0lEQVR42nWRzS4EQRSFb2IjLGxN7LwImTWxEFsbS4v+iSbzEmw8iSUeQFgYklkIyQhDmsTMMNO3e+rvulUpSgenOpXu219OTu4BgF4TsyrB9PskGGM0jjHrNd1vKekfSfG4DJjxW0nSH0GkSdzpa/FgCiLMAFMGvIcxRGrwtLU3B3DQ0LcMRDWAGMhj8NJXdcB6Gz28WAR42ZQd2dYjBtIAGHJ6nQeQl+QVAM0GNxhXUT4LgBuT1nBX5QwkHjCSryNwoil77y/IPtH4CyDFDu3+SrHWnQYYLX2s4iHRnxnuG5zhjKxkHSCXY9C1IU/4a/IbMPy8W0CduhlPq+TnqgUDbx3rcOxmpVt1KCtkUOehLF+3L3qn2H6eAcD1ssU7cXV/AsbIj6Mq7ot4AAAAAElFTkSuQmCC') no-repeat 20px center !important
    padding: 10px 20px 10px 40px
    text-align: left
    width: 100%

  @media (max-width: 768px)
    .q-login
      .column
        padding: 10px

</style>