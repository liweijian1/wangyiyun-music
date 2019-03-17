<template>
<transition name="slide">
  <div class="user">
    <div class="back" @click="back">
      <i class="iconfont iconfanhui"></i>
    </div>
    <div class="switch-wrapper">
      <switches :switches="switches" :currentIndex="currentindex" @switch="switchItem"></switches>
    </div>
    <div class="sequence-play">
      <i class="iconfont iconbofang2"></i>
      <span class="text">播放全部</span>
      <span class="count">(共{{}}首)</span>
    </div>
    <div class="list-wrapper" ref="listWrapper">
        <scroll ref="favoriteList" class="list-scroll" :data="favoriteList" v-if="currentindex === 0">
          <div class="list-inner">
          </div>
        </scroll>
        <scroll ref="palyList" class="list-scroll" v-if="currentindex === 1">
          <div class="list-inner"></div>
        </scroll>
    </div>
    <div class="no-result-wrapper" v-show="noResult"></div>
  </div>
</transition>

</template>

<script>
    import Switches from "../../base/switches";
    import Scroll from "../../base/scroll";
    import {mapGetters,mapActions}from 'vuex';
    export default {
        name: 'user',
      components: {Scroll, Switches},
      data(){
          return{
            switches:[
              {name:'我的收藏'},
              {name:'最近播放'}
            ],
            currentindex:0,
          }
      },
      computed:{
          noResult(){
            if(this.currentIndex === 0){
              console.log(this.favoriteList);
            }
          }
      },
      methods:{
          back(){
            this.$router.back()
          },
          switchItem(index){
            this.currentindex = index;
          }
      }
    }
</script>

<style lang="scss" scoped>
  @import "./../../common/scss/variable";
.user{
  position: fixed;
  top:0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color:$color-background ;
  &.slide-enter-active,&.slide-leave-active{
    transition: all 0.5s;
  }
  &.slide-enter,&.slide-leave-to{
    transform: translate3d(-50%,-50%,0);
    opacity: 0;
  }
  .back{
    position: absolute;
    top:6px;
    left: 4px;
    .iconfanhui{
      padding: 5px 10px;
      font-size:30px;
      color: #fff;
    }
  }
  .switch-wrapper{
    display: flex;
    align-items: center;
    background: $color-theme;
    height: 44px;
  }
  .sequence-play{
    position: absolute;
    top:44px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding-left: 16px;
    border-bottom: 1px solid rgb(228,228,228);
    .iconfont{
      font-size: 18px;
      color:$color-text;
      padding-right: 14px;
    }
    .text{
      font-size: $font-size-medium-x;
    }
    .count{
      font-size: $font-size-medium;
      color: $color-text-g;
    }
  }
}
</style>
