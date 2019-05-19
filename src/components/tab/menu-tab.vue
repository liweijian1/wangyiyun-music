<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
      <span>每日推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/recommend">
      <span>歌单</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/recommend">
      <span>排行榜</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/recommend">
      <span>电台</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/recommend">
      <span>直播</span>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "menu-tab"
    }
</script>

<style lang="scss" scoped>
  @import "./../../common/scss/variable";
    .tab{
      display: flex;
      line-height: 44px;
      height: 44px;
      width: 100%;
      font-size:$font-size-medium;
      .tab-item{
        flex: 1;
        text-align: center;
      }
    }
</style>
