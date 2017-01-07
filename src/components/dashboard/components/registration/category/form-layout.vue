<template>
  <div>
    <q-fab class="absolute-bottom-right" @click="toast('Closed')" classNames="primary"
           active-icon="alarm" direction="up" style="right: 18px; bottom: 18px;">
      <q-small-fab class="purple" @click.native="toast('mail')" icon="mail"></q-small-fab>
      <q-small-fab class="secondary" @click.native="toast('alarm')" icon="alarm"></q-small-fab>
    </q-fab>
  </div>
</template>
