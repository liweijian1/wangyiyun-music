<template>
    <div class="tab">
        <router-link tag="div" class="tab-item" to="/recommend">
          <span>推荐</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/rank">
          <span>排行</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/singer">
          <span>歌手</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/registe">
          <span>账号</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'tab',
    }
</script>

<style lang="scss" scoped>
  @import "./../../common/scss/variable";
   .tab{
     position: fixed;
     display: flex;
     line-height: 44px;
     height: 44px;
     width: 100%;
     z-index:1;
     font-size:$font-size-medium;
     background: $color-theme;
     .tab-item{
       flex: 1;
       text-align: center;
       color: $color-text-lm;
       span{
         padding-bottom: 3px;
       }
       &.router-link-active{
        span{
         //border-bottom:2px solid $color-text-l;
         color: $color-text-l;
         font-weight: bold;
         }
     }
     }
   }
</style>
