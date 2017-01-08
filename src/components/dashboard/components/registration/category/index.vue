<template>
  <div class="app-content">

    <q-modal ref="searchModal" class="maximized search-modal">
      <q-search ref="searchField" v-model="searchModel" :debounce="300" placeholder="Pesquisar"
                icon="search"></q-search>
      <br>
      <button class="tertiary" @click="$refs.searchModal.close()">Minimize</button>
    </q-modal>

    <div class="grid-container">

      <div class="grid-header no-rotate">
        Categorias
        <div class="grid-toolbar">
          <q-pagination ref="paginationField" v-model="paginationModel"
                        :min="paginationLimit.min" :max="paginationLimit.max"></q-pagination>
          <button class="light clear" @click="searchOpen">
            <i>search</i>
          </button>
        </div>
      </div>
      <div class="grid-body">

        <q-data-table :data="table" :config="config" :columns="columns" @refresh="refresh">

          <template slot="col-options" scope="cell">
            <button class="small white link" @click="rowOptions(cell)">
              <i class="material-icons">settings</i>
            </button>
          </template>

          <template slot="selection" scope="props">
            <button class="primary clear" @click="rowDestroy(props)">
              <i>delete</i>
            </button>
          </template>

        </q-data-table>
      </div>
    </div>

    <button class="primary circular button-fab" @click="route('/create')">
      <i>add</i>
    </button>
  </div>
</template>

<script type="text/javascript">
  import {Utils, Toast, ActionSheet} from 'quasar-framework';
  import {FormAbstract} from 'components/common/form';
  import defaults from './defaults';

  // noinspection ReservedWordAsName
  export default {
    extends: FormAbstract,
    name: 'registration-category-index',
    data () {
      return defaults.grid;
    },
    mounted () {
      this.fetch();
    },
    beforeDestroy () {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
    },
    methods: {
      searchOpen () {
        this.$refs['searchModal'].open();
        window.setTimeout(() => {
          this.$refs['searchField'].$el.querySelector('.q-search-input').focus();
        }, 200);
      },
      /**
       * @param props
       */
      changeMessage (props) {
        props.rows.forEach(row => {
          row.data.message = 'Quasar Framework rocks!'
        });
        Toast.create('Changed "Message" field for selected row(s).')
      },
      /**
       * @param selection
       */
      rowDestroy (selection) {
        selection.rows.forEach(row => {
          const data = {};
          for (let field in row.data) {
            if (row.data.hasOwnProperty(field)) {
              data[field] = row.data[field];
            }
          }
          this.table.splice(row.index, 1);
        });
      },
      /**
       * @param cell
       */
      rowOptions (cell) {
        ActionSheet.create({
          title: 'Options',
          gallery: true,
          actions: this.acl(cell),
          // optional:
          dismiss: {
            label: 'Cancel',
            icon: 'cancel'
          }
        })
      },
      /**
       * @param cell
       * @returns {Array}
       */
      acl (cell) {
        return [
          {
            label: 'Edit',
            icon: 'edit',
            handler: () => {
              this.route('/' + cell.row.__index + '/edit');
            }
          },
          {
            label: 'Delete',
            icon: 'delete',
            handler: () => {
              const index = cell.row.__index;
              const data = Utils.clone(cell.row);
              this.rowDestroy({
                rows: [
                  {data, index}
                ]
              });
            }
          },
          {
            label: 'Open',
            icon: 'open_in_browser',
            handler: () => {
              this.route('/' + cell.row.__index + '/edit');
            }
          }
        ];
      },
      refresh (done) {
        this.timeout = setTimeout(() => {
          done()
        }, 5000);
      }
    },
    watch: {
      searchModel (value) {
        let data = Utils.clone(this.table);
        if (value) {
          data.splice(0, 20 - value.length);
        }
        this.table = data;
        this.$refs['paginationField'].set(1);
      },
      paginationModel (value) {
        // this.paginationLimit.max = this.paginationLimit.max + 1;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .q-search button, .q-data-table
    box-shadow: none !important
    border: none
  .grid-container
    .q-data-table-selection
      background: #f4f4f4
    .q-data-table-selection, .q-data-table-toolbar.upper-toolbar
      border-width: 1px 0
      border-color: #ddd
      border-style: solid
    .q-data-table-selection, .q-data-table-selection button.clear
      color: #757575
    .q-data-table-title
      font-family: PlayRegular
    .grid-toolbar
      float: right !important
      margin: -5px 0 0 0
      display: flex;

  .modal.maximized.search-modal
    width: calc(100% - 291px)
    min-height: 150px
    top: -1px
    height auto
    left: auto
    bottom: auto
    .modal-content
      width: 100% !important
      height: auto !important
      max-width: auto !important
      max-height: auto !important
      padding: 40px 20px 20px 20px !important

  @media screen and (max-width: 768px)
    .modal.maximized.search-modal
      width: 100%
</style>
