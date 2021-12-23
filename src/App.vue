<template>
  <div id="app">
<!--    <f-button icon="settings">你好</f-button>-->
    <f-collapse :selected.sync="select" single>
        <f-collapse-item title="首页1" name="1">首页1</f-collapse-item>
        <f-collapse-item title="首页2" name="2">首页2</f-collapse-item>
        <f-collapse-item title="首页3" name="3">首页3</f-collapse-item>
    </f-collapse>
  </div>
</template>

<script>
import fButton from './button/button'

export default {
  name: 'App',
    data() {
      return {
          select:'1'
      }
    }
}
</script>

<style lang="scss">
#app {
  padding: 200px;
}
</style>
