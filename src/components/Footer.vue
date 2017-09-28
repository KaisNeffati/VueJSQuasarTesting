<template>
  <!-- Footer -->
  <q-toolbar>
    <q-toolbar-title>
      <span slot="subtitle">Made with <q-icon name="favorite" style="font-size: large" /> by Kais</span>
    </q-toolbar-title>
  </q-toolbar>
</template>

<script>
  import {
    QToolbar,
    QToolbarTitle,
    QIcon
  } from 'quasar'
  export default {
    data () {
      return {}
    },
    components: {
      QToolbar,
      QToolbarTitle,
      QIcon
    }
  }
</script>

<style>
</style>
