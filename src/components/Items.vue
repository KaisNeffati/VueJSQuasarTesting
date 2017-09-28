<template>
  <div>
    <q-item class="shadow-2" v-for="item in items" :key="item.id">
      <q-item-side :image="'/statics/img/'+item.image"></q-item-side>
      <q-item-main>
        <q-item-tile label>{{item.title}}</q-item-tile>
        <q-item-tile sublabel>{{item.email}}</q-item-tile>
        <q-item-tile sublabel lines="3">
          {{item.description}}
        </q-item-tile>
      </q-item-main>
      <q-item-side right>
        <q-item-tile stamp><strong>{{item.price}} euro</strong></q-item-tile>
        <br>
        <q-checkbox
          v-model="favorites"
          class="favorite"
          :val="item"
          color="secondary"
          checked-icon="favorite"
          unchecked-icon="favorite_border"
          style="margin-left: 25px"
        />
      </q-item-side>
    </q-item>
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

  export default {
    data () {
      return {}
    },
    props: {
      items: Array,
      favorites: Array
    },
    components: {
      QList,
      QItem,
      QBtn,
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
      QCheckbox
    }
  }
</script>

<style>
  @media screen and (max-width: 500px) {
    .q-item {
      display: block;
      text-align: center;
    }
    .sortButton {
      font-size: small;
    }
    .sortGroup .col-auto,.sortGroup .col {
      width: 100%!important;
      text-align: center;
    }
    .q-pagination {
      float: none;
    }
  }
</style>
