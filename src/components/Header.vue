<template>
  <!-- Header -->
  <q-toolbar >
    <img src="../statics/Wallapop-icon.png" width="30px"/>
    <q-toolbar-title>
      Wallapop
      <span slot="subtitle">Kais NEFFATI</span>
    </q-toolbar-title>
  </q-toolbar>
</template>

<script>
  import {
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon
  } from 'quasar'

  export default {
    data () {
      return {}
    },
    components: {
      QToolbar,
      QToolbarTitle,
      QBtn,
      QIcon
    }
  }
</script>

<style>
</style>
