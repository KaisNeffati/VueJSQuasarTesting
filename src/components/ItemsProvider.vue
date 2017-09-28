<template>
  <div>
    <!-- Modal of favorites -->
    <favorites-modal-component ref="layoutModal" :favorites="favorites"></favorites-modal-component>
    <!-- List of items -->
    <q-list highlight>
      <div class="feature-bar">
        <div class="row">
          <div class="col-8">
            <q-search v-model="body.search" @change="ServerSideSearching" inverted color="primary"
                      stack-label="Search for items"/>
          </div>
          <div class="col-4" style="padding-top:1.5%;padding-left: 1%">
            <q-btn flat icon-right="favorite" name="favoritesButton" @click="openFavoritesModal"
                   color="secondary" style="width: 100%;height: 90%">Favorites
            </q-btn>
          </div>
        </div>

        <div class="row sortGroup">
          <div class="col-auto">
            <q-btn class="sortButton" v-for="option in sortOptions" :key="option.label" @click="Sortby(option)" flat color="primary">
              {{option.label}}
              <q-icon style="margin-left: 5px" v-show="!option.value" name="swap_vert"/>
              <q-icon style="margin-left: 5px;font-size: large" v-show="option.value==='asc'" name="arrow_upward"/>
              <q-icon style="margin-left: 5px;font-size: large" v-show="option.value==='desc'" name="arrow_downward"/>
            </q-btn>
          </div>
          <div class="col">
            <q-pagination @change="paginating" v-model="body.offset" color="primary" :max="this.maxpage"/>
          </div>
        </div>
      </div>
      <items-component :items="items" :favorites="favorites"></items-component>
    </q-list>
  </div>
</template>

<script>
  import {
    QSearch,
    QPagination,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSide,
    QItemMain,
    QItemTile,
    QToolbar,
    QCard,
    QCardTitle,
    QCheckbox,
    QCardMain
  } from 'quasar'
  import { mapGetters } from 'vuex'
  import FavoritesModalComponent from './FavoritesModal.vue'
  import ItemsComponent from './Items.vue'

  export default {
    data () {
      return {
        search: '',
        favorites: [],
        sortOptions: [
          {label: 'Title', value: null},
          {label: 'Email', value: null},
          {label: 'Price', value: null},
          {label: 'Description', value: null}
        ],
        body: {
          limit: 5,
          offset: 1,
          search: '',
          sortBy: {
            option: null,
            order: null
          }
        }
      }
    },
    components: {
      QList,
      QItem,
      QBtn,
      FavoritesModalComponent,
      QIcon,
      QItemSide,
      QItemMain,
      QItemTile,
      QSearch,
      QPagination,
      QToolbar,
      QCard,
      QCardTitle,
      QCardMain,
      QCheckbox,
      ItemsComponent
    },
    computed: {
      ...mapGetters({
        items: 'allItems',
        maxpage: 'nbrItems'
      })
    },
    created () {
      this.$store.dispatch('setAdditionalProperties')
      this.$store.dispatch('countItemsAction', this.body)
      this.$store.dispatch('getItemsAction', this.body)
    },
    methods: {
      ServerSideSearching () {
        this.body.offset = 1
        this.$store.dispatch('countItemsAction', this.body)
        this.$store.dispatch('getItemsAction', this.body)
      },
      paginating () {
        this.$store.dispatch('countItemsAction', this.body)
        this.$store.dispatch('getItemsAction', this.body)
      },
      Sortby (option) {
        switch (option.value) {
          case null:
            option.value = 'asc'
            break
          case 'asc':
            option.value = 'desc'
            break
          case 'desc':
            option.value = null
            break
        }
        this.body.sortBy.option = option.label.toLowerCase()
        this.body.sortBy.order = option.value
        this.ServerSideSearching()
      },
      openFavoritesModal () {
        this.$refs.layoutModal.open()
      }
    }
  }
</script>

<style>
  .q-item {
    margin: 1% 10%;
  }

  .feature-bar {
    margin: 0% 10%;
  }

  .q-pagination .q-if {
    padding: 0 !important;
    margin: 0 !important;
  }

  .q-pagination {
    height: 30px;
    float: right;
  }

  .sortButton {
    min-width: 90px;
  }
  .q-pagination button {
    min-width: 40px;
  }

  .favorite .q-checkbox-unchecked, .favorite .q-checkbox-checked {
    font-size: xx-large;
  }

  .favorite .q-toolbar {
    background-color: rgb(255, 0, 128)
  }

</style>

