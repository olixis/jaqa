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
          <template slot="col-source" scope="cell">
            <span v-if="cell.data === 'Audit'" class="label text-white bg-primary">
          Audit
          <q-tooltip>Some tooltip</q-tooltip>
        </span>
            <span v-else class="label text-white bg-negative">{{ cell.data }}</span>
          </template>

          <template slot="selection" scope="props">
            <!--<button class="primary clear" @click="changeMessage(props)">-->
            <!--<i>edit</i>-->
            <!--</button>-->
            <button class="primary clear" @click="rowDestroy(props)">
              <i>delete</i>
            </button>
          </template>

        </q-data-table>
      </div>
    </div>
    <button class="primary circular button-fab" @click="route('/add')">
      <i>add</i>
    </button>
  </div>
</template>

<script type="text/javascript">
  import {Utils, Toast, ActionSheet} from 'quasar-framework'
  import table from './data/table.json';
  import {FormAbstract} from 'components/common/form';
  import defaults from './defaults';

  // noinspection ReservedWordAsName
  export default {
    extends: FormAbstract,
    name: 'registration-category-index',
    data () {
      return {
        table,
        searchModel: '',
        searchVisible: false,
        config: {
          title: '',
          refresh: true,
          columnPicker: true,
          leftStickyColumns: 1,
          rightStickyColumns: 0,
          bodyStyle: {
            maxHeight: (Utils.dom.viewport().height - 240) + 'px'
          },
          rowHeight: '50px',
          responsive: true,
          pagination: false,
          selection: 'multiple',
          messages: {
            noData: '<i>warning</i> No data available to show.',
            noDataAfterFiltering: '<i>warning</i> No results. Please refine your search terms.'
          }
        },
        columns: [
          {
            label: 'Options',
            field: 'options',
            width: '100px'
          },
          {
            label: 'Unique',
            field: 'unique_id',
            width: '100px'
          },
          {
            label: 'Service',
            field: 'serviceable',
            format (value) {
              if (value === 'Informational') {
                return '<i class="text-positive">info</i>'
              }
              return value
            },
            width: '80px'
          },
          {
            label: 'Message',
            field: 'message',
            width: '500px'
          },
          {
            label: 'Source',
            field: 'source',
            width: '120px'
          }
        ],
        base: defaults.base,
        paginationModel: 1,
        paginationLimit: {
          min: 1,
          max: 5
        }
      }
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
        console.log(this.$refs['searchField'].$el.querySelector('.q-search-input'));
      },
      changeMessage (props) {
        props.rows.forEach(row => {
          row.data.message = 'Quasar Framework rocks!'
        });
        Toast.create('Changed "Message" field for selected row(s).')
      },
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
      rowOptions (cell) {
        ActionSheet.create({
          title: 'Options',
          gallery: true,
          actions: [
            {
              label: 'Edit',
              icon: 'edit',
              handler: () => {
                this.route('/edit/' + cell.row.__index);
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
                this.route('/edit/' + cell.row.__index);
              }
            }
          ],
          // optional:
          dismiss: {
            label: 'Cancel',
            icon: 'cancel'
          }
        })
      },
      refresh (done) {
        this.timeout = setTimeout(() => {
          done()
        }, 5000);
      }
    },
    watch: {
      searchModel (value) {
        let data = Utils.clone(table);
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
