<template>
  <q-modal ref="layoutModal" :content-css="{minWidth: '80vw', minHeight: '80vh'}">
    <q-modal-layout class="favorite">
      <q-toolbar slot="header">
        <q-btn flat @click="$refs.layoutModal.close()">
          <q-icon name="keyboard_arrow_left"/>
        </q-btn>
        <div class="q-toolbar-title">
          Favorites
        </div>
      </q-toolbar>
      <q-toolbar slot="header">
        <q-search inverted v-model="search" @change="clientSideSearching" color="none"/>
      </q-toolbar>
      <q-toolbar class="favorite" slot="footer">
        <div class="q-toolbar-title">
          Footer
        </div>
      </q-toolbar>
      <div class="layout-padding">
        <div class="row">
          <div class="col-3" v-for="favorite in filtredFavorites">
            <q-card-media overlay-position="top" class="responsive">
              <img name="favored" :src="'/statics/img/'+favorite.image">
              <q-card-title slot="overlay">
                <span slot="subtitle">{{favorite.title}}</span>
              </q-card-title>
            </q-card-media>
          </div>
        </div>
      </div>
    </q-modal-layout>
  </q-modal>

</template>

<script>
  import {
    QSearch,
    QBtn,
    QIcon,
    QModal,
    QModalLayout,
    QToolbar,
    QCardMedia,
    QCardTitle
  } from 'quasar'

  export default {
    data () {
      return {
        search: '',
        filtredFavorites: []
      }
    },
    components: {
      QModal,
      QModalLayout,
      QToolbar,
      QBtn,
      QIcon,
      QSearch,
      QCardMedia,
      QCardTitle
    },
    props: {
      favorites: Array
    },
    methods: {
      open () {
        this.clientSideSearching()
        this.$refs.layoutModal.open()
      },
      clientSideSearching () {
        this.filtredFavorites = this.favorites.filter(item => item['title'].toString().toUpperCase().includes(this.search.toUpperCase()))
      }
    }
  }
</script>

<style scoped>
  .q-card-media {
    border-radius: 30px;
    margin: 5px;
  }

</style>
