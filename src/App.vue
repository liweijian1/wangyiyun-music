<template>
  <div id="app">
    <div class="header">
      <m-header></m-header>
    </div>
    <div class="content">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    <div class="foote">
      <tab></tab>
    </div>
  </div>
</template>

<script>
import MHeader from "./components/m-header/m-header";
import Tab from "./components/tab/tab";
export default {
  name: 'App',
  components: {Tab, MHeader}
}
</script>

<style lang="scss">
  @import "./common/scss/index";
#app {
  display: flex;
  flex-flow: column;
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  .header{
    height: 44px;
  }
  .content{
    flex: 1;
    overflow-y: scroll;
  }
  .foote{
    height: 44px;
  }
}
</style>
