<template>
  <div class="app-content app-auth">

    <video autoplay loop id="video-background" :class="opaque" muted>
      <source src="statics/videos/auth.mp4" type="video/mp4">
    </video>

    <div class="q-panel q-login">
      <img src="statics/images/bye.png" alt="">
    </div>
  </div>
</template>

<script>
  import FormAbstract from './abstract';

  // noinspection ReservedWordAsName
  export default {
    extends: FormAbstract,
    name: 'auth-logout'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .q-panel.q-login
    img
      width: 100%
</style>