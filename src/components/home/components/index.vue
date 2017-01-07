<template>
  <div class="container">
    <div class="row md-column">
      <div class="auto">
        <div class="jumbotron">
          <h3 class="font-play-regular">Controle Total!</h3>
          <p> {{ leadUserEmail }}
            O <strong>{{ AppName }}</strong> foi feito para você que quer saber exatamente o que está
            recebendo
            e o que
            está pagando.
          </p>
          <p>
            De forma rápida e simples você cria a sua conta e já sai usando!
          </p>

          <form action="_self" onsubmit="return false;">
            <div class="row sm-column">
              <div class="width-2of3" style="padding: 2px 4px 0 0;">
                <input type="email" class="input input-lg" v-model="email" placeholder="Informe seu melhor e-mail..."
                       style="height: 46px;" required="">
                <span class="input-bar"/>
              </div>
              <div class="auto" style="padding: 0 4px 0 0;">
                <button class="button primary big full-width" :disabled="isDisabled" @click="register()">Começar Grátis
                </button>
              </div>
            </div>

          </form>

          <div class="clearfix"></div>
        </div>
      </div>

      <div class="width-2of5 desktop-only has-text-right">
        <img src="statics/images/figura.png">
      </div>
    </div>

  </div>
</template>

<script type="text/javascript">
  import HomeAbstract from './abstract';
  import {isEmpty} from 'lodash';
  import {mapGetters, mapActions} from 'vuex';

  export default {
    extends: HomeAbstract,
    name: 'home-index',
    data () {
      return {
        email: '',
        label: 'Home'
      }
    },
    mounted () {
      // this.email: this.$store.state.home.leadUserEmail,
    },
    computed: {
      isDisabled () {
        // noinspection JSUnresolvedVariable
        return isEmpty(this.email);
      },
      ...mapGetters(['leadUserEmail'])
    },
    methods: {
      register () {
        // noinspection JSUnresolvedVariable
        const email = this.email;
        this.setLeadUserEmail(email);
        this.$router.push('/auth/register?email=' + email);
      },
      ...mapActions(['setLeadUserEmail'])
    }
  };
</script>