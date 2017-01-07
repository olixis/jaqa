<script>
  import {FormAbstract, FString, FText, FPassword, FCheckbox} from 'components/common/form';
  import items from './items';

  // noinspection ReservedWordAsName
  export default {
    extends: FormAbstract,
    components: {
      FString, FPassword, FCheckbox, FText
    },
    name: 'registration-category-form',
    data () {
      return {
        items: items
      };
    },
    computed: {},
    mounted () {},
    methods: {
      save () {
        this.toast('Tudo certo!', () => {
          return new Promise((resolve) => {
            window.setTimeout(() => {
              resolve('Ok');
            }, 2000)
          });
        });
      }
    }
  };
</script>