<template>
   <div class="recommend">
     <scroll class="recommend-content" :data="playList" ref="scroll">
        <div>
          <div v-show="banner.length" class="decorate" v-if="banner.length"></div>
          <div v-if="banner.length" class="slider-wrapper">
            <slider>
              <div v-for="item in banner" :key="item.id" @click.stop="selectBanner(item)">
                <img :src="item.imageUrl">
              </div>
            </slider>
          </div>
          <div class="recommend-list" ref="recommendList">
            <h1 class="title">推荐歌单</h1>
            <ul>
              <li class="item" v-for="item in playList" :key="item.id">
                <div class="icon">
                  <div></div>
                  <img v-lazy="item.picUrl"/>
                </div>
                <p class="play-count">
                  {{Math.floor(item.playCount/10000)}}万
                </p>
                <p class="text">{{item.name}}</p>
              </li>
            </ul>
          </div>
          <div class="recommend-song" ref="recommendSong">
            <h1 class="title">推荐歌曲</h1>
            <ul>
              <li class="item" v-for="item in recommendMusic" :key="item.id">
                <div class="icon">
                  <img v-lazy="item.image"/>
                </div>
                <p class="text">{{item.name}}</p>
                <p class="singer">{{item.singer}}</p>
              </li>
            </ul>
          </div>
        </div>
     </scroll>
     <router-view></router-view>
   </div>
</template>

<script>
    import Scroll from "../../base/scroll";
    import {createRecommmendSong} from './../../common/js/song'
    import {getBanner,getRecommendList,getRecommendSong} from "./../../api/recommend"
    import Slider from "../../base/slider";
    import {mapMutations} from 'vuex';
    export default {
        name: 'recommend',
      components: {Slider, Scroll},
      data(){
          return{
            banner:[],
            playList:[],
            recommendMusic:[],
          }
      },
      created(){
          this._getBanner()
          this._getRecommendList()
          this._getRecommendSong()
      },
      methods:{
          //获取轮播图
          _getBanner(){
            getBanner().then((res) => {
              if(res.data.code === 200) {
                let list = res.data.banners
                this.banner = list.splice(4)
              }else{
                 console.error('Banner获取失败');
              }
             })
          },
          selectBanner(item){
            console.log(item)
            let regHttp = /^http/
            if(regHttp.test(item.url)){
              window.open(item.url)
            }
          },
        //获取推荐歌单
        _getRecommendList(){
          getRecommendList().then((res) => {
            if(res.data.code === 200) {
               this.playList = res.data.result
            }else{
              consle.error('getRecommendList 获取失败')
            }
          })
        },
        //获取推荐歌曲
        _getRecommendSong(){
            getRecommendSong().then( res => {
              if(res.data.code === 200){
                this.recommendMusic = res.data.result.map((item) => {
                  return createRecommmendSong(item)
                })
              }else{
                console.error('获取失败')
              }
            })
        },
        handlePlaylist (playlist) {
          const bottom = playlist.length > 0 ? '60px' : ''
          this.$refs.recommend.style.bottom = bottom
          this.$refs.scroll.refresh()
        },

        ...mapMutations({
          setMusicList:'SET_MUSIC_LIST',
          setFullScreen:'SET_FULL_SCEREEN'
        })

      }
    }
</script>

<style lang="scss" scoped>
@import "./../../common/scss/variable";
@import "./../../common/scss/mixin";
  .recommend{
    //position: fixed;
    width: 100%;
    height: 100%;
    bottom: 0;
    padding-bottom: 20px;
    z-index: 100;
    .recommend-content{
      width: 100%;
      height: 100%;
      overflow: hidden;
      .decorate{
        position: absolute;
        top:-30vh;
        z-index: -10;
        background: $color-theme;
        width: 100%;
        height: 50vh;
        vertical-align: inherit;
      }
      .slider-wrapper{
        width: 96%;
        margin: 0 auto;
        border-radius: 5px;
        overflow: hidden;
      }
      .recommend-list{
        position: relative;
        box-sizing: border-box;
        width: 100%;
        text-align: center;
        .title{
          height: 65px;
          line-height: 65px;
          padding-left: 1.5%;
          text-align: left;
          font-size: $font-size-medium;
          font-weight: bold;
          color: $color-text;
        }
        .item{
          display: inline-block;
          position: relative;
          box-sizing: border-box;
          width: 33%;
          padding: 0 1%;
          .icon{
            position: relative;
            display: inline-block;
            width: 100%;
            margin-bottom:5px ;
            img{
              width: 100%;
              height: 100%;
              border-radius: 3px;
            }
          }
          .play-count{
            position: absolute;
            top:5px;
            right: 8px;
            font-size: $font-size-small-s;
            color:$color-text-l
          }
          .text{
            line-height: 16px;
            height: 40px;
            text-align: left;
            overflow: hidden;
            margin-bottom: 10px;
            font-size: $font-size-small;
          }
        }
      }
      .recommend-song{
        position: relative;
        box-sizing: border-box;
        width: 100%;
        text-align: center;
        .title{
          height: 65px;
          line-height: 65px;
          padding-left: 1.5%;
          text-align: left;
          font-size:$font-size-medium;
          font-weight: bold;
          color: $color-text;
        }
        .item{
          display: inline-block;
          position: relative;
          box-sizing: border-box;
          width: 33%;
          padding: 0 1%;
          .icon{
            position: relative;
            display: inline-block;
            width: 100%;
            margin-bottom:5px ;
            img{
              width: 100%;
              height: 100%;
              border-radius: 3px;
            }
          }
          .text{
            line-height: 16px;
            text-align: left;
            height: 16px;
            @include no-wrap();
            font-size: $font-size-small;
          }
          .singer{
            line-height: 16px;
            margin-bottom: 10px;
            text-align: left;
            @include no-wrap();
            font-size: $font-size-small;
            color: $color-text-g;
          }
        }
      }
    }
  }
</style>
