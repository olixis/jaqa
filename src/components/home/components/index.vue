<template>
  <div class="container">
    <div class="layout-padding">
      <h4>This is {{ AppName }}</h4>
      <blockquote>
        <small>
          This view contains two drawers. One on left and one on right.
          <span class="desktop-only">Click</span> <span class="mobile-only">Tap</span> on menu buttons from top-left
          or top-right corners of the screen, or swipe the
          Drawers into view from the left or right edge of screen.
        </small>
      </blockquote>
      <p>
        The Quasar Layout Drawer (also known as a Sidebar) is the element on the left
        side (or right side!) of your screen, usually used for Navigation, which gets
        hidden on smaller screens and is shown alongside the Page content on wide
        enough screens.
      </p>
      <p>
        Drawers can be activated by swiping them into view from the edge of the screen
        or by clicking/tapping on menu buttons. Their position is based on how you
        structure the layout template. You can, for instance, display a Drawer on right
        side of screen on big screens but swipe them from left on smaller screens.
        It's up to you and where you place the Drawer HTML tag.
      </p>
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