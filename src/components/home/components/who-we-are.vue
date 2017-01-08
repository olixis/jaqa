<template>
  <div class="container">
    <div class="layout-padding">
      <h4>Who we are?</h4>
      <p>
        Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Quem
        manda na minha terra sou Euzis! Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique
        interdum. undefined
      </p>
      <p>
        Atirei o pau no gatis, per gatis num morreus. Casamentiss faiz malandris se pirulitá. Diuretics paradis num copo
        é motivis de denguis. Paisis, filhis, espiritis santis.
      </p>
      <p>
        Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Praesent malesuada urna nisi, quis
        volutpat erat hendrerit non. Nam vulputate dapibus. Praesent vel viverra nisi. Mauris aliquet nunc non turpis
        scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi!
      </p>
    </div>
  </div>
</template>

<script type="text/javascript">
  // noinspection NpmUsedModulesInstalled
  import {Toast} from 'quasar';
  import HomeAbstract from './abstract';

  export default {
    extends: HomeAbstract,
    name: 'home-who_we_are',
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
