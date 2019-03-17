<template>
    <transition name="search">
      <div class="search">
        <div class="back" @click="back">
          <i class="iconfont iconfanhui"></i>
        </div>
      </div>
    </transition>
</template>

<script>
    export default {
        name: 'search',
        methods:{
          back(){
            this.$router.back();
          }
        }
    }
</script>

<style lang="scss" scoped>
  @import "./../../common/scss/variable";
  .search{
    position: fixed;
    top:0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    background-color: $color-background;
    &.search-enter-active,&.search-leave-active{
      transition: all 0.5s;
    }
    &.search-enter,&.search-leave-to{
      opacity: 0;
      transform: translate3d(50%,-50%,0);
    }
  }
</style>
