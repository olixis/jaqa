<template>
  <div class="container">
    <div class="layout-padding">
      <p class="caption">Basic Toasts</p>
      <p class="group">
        <button class="button primary" @click="basicToast()">
          Default Toast
        </button>

        <button class="button primary" @click="basicToastWithLongMessage()">
          Default Toast with Long Message
        </button>
      </p>

      <p class="caption">Types of Toasts</p>
      <p class="group">
        <button v-for="type in types" :class="'button ' + type" @click="toastWithType(type)">
          {{ capitalize(type) }} Toast
        </button>
      </p>

      <p class="caption">Toasts with Options</p>
      <p class="group">
        <button class="button primary" @click="toastWithIcon()">
          Toast With an Icon
        </button>

        <button class="button primary" @click="toastWithButton()">
          Toast With a Button
        </button>
    </div>
  </div>
</template>

<script type="javascript">
  import homeWhoWeAre from './@component';
  import { Toast, Dialog } from 'quasar';

  export default {
    name: 'home-who_we_are',
    extends: {
      ...homeWhoWeAre
    },
    data () {
      return {
        label: 'Quem Somos',
        types: ['positive', 'negative', 'info', 'warning'],
        toastShowing: false
      }
    },
    methods: {
      capitalize (msg) {
        return msg.charAt(0).toUpperCase() + msg.slice(1)
      },
      basicToast () {
        Toast.create('Lorem ipsum dolor')
      },
      basicToastWithLongMessage () {
        Toast.create('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
      },
      toastWithType (type) {
        Toast.create[type]({
          html: type.charAt(0).toUpperCase() + type.slice(1) + ' toast'
        })
      },
      toastWithIcon () {
        Toast.create({
          html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          icon: 'camera_enhance'
        })
      },
      toastWithButton () {
        Toast.create({
          html: 'Toast with an action button',
          timeout: 6000,
          button: {
            label: 'Undo',
            handler () {
              Toast.create('Undone')
            }
          }
        })
      }
    }
  };
</script>
