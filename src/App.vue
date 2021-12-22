<template>
  <div id="app">
    <f-button icon="settings">你好</f-button>
  </div>
</template>

<script>
import fButton from './button'

export default {
  name: 'App',
  components: {
      fButton
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
