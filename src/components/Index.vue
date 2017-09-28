<template>
  <q-layout ref="layout" view="hHr LpR lFf" :right-breakpoint="1100">
    <!-- Header component -->
    <header-component slot="header"></header-component>

    <!-- Items provider component -->
    <items-provider></items-provider>

    <!-- Footer component -->
    <footer-component slot="footer"></footer-component>
  </q-layout>
</template>

<script>
  import {
    QLayout
  } from 'quasar'
  import HeaderComponent from './Header.vue'
  import FooterComponent from './Footer.vue'
  import ItemsProvider from './ItemsProvider.vue'

  export default {
    data () {
      return {
        search: ''
      }
    },
    components: {
      QLayout,
      HeaderComponent,
      FooterComponent,
      ItemsProvider
    }
  }
</script>

<style>
</style>
