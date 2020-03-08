<template>
  <div id="app">
    <AppHeader/>
    <router-view/>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from './components/Layout/Header'
import AppFooter from './components/Layout/Footer'

import axios from 'axios'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
  methods: {
    getTest() {
      this.$http.get('/sterling/TransferAPIs/api/Spay/InterbankNameEnquiry?', {
        // "headers": {
        //   "sandbox-key": "5becec1e9d6c7d670cde1ae3cdcc7f66"
        // }
      })
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
    }
  },
  mounted() {
    // this.getTest()
  }
}
</script>

<style>
#app {

}
</style>
