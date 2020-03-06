<template>
  <div id="app">
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="mail"> <a-icon type="mail" />Navigation One </a-menu-item>
      <a-menu-item key="app" > <a-icon type="appstore" />Navigation Two </a-menu-item>

    </a-menu>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {

}
</style>
