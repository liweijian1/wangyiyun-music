<template>
<div class="rank" ref="rank">
  <scroll class="toplist" ref="scroll">
    <ul>
      <li class="item" v-for="item in yunTopList" :key="item.id">
        <div class="icon">
          <img v-lazy="item.coverImgUrl"/>
        </div>
        <ul class="songList">
          <li class="song" v-for="(song,index) in item.top" :key="index">
            <span>{{index+1}}.</span>
            <span>{{song.name}}-{{song.ar[0].name}}</span>
          </li>
        </ul>
      </li>
    </ul>
  </scroll>
</div>
</template>

<script>
    import Scroll from "../../base/scroll";
    import {getTop} from "../../api/rank";

    const YUNMUSIC_TOP=[0,1,2,3,4,22,23]
    export default {
        name: 'rank',
      components: {Scroll},
      data(){
          return{
            yunTopList:[]
          }

      },
      created(){
          this._getTopList()
      },
      methods:{
       _getTopList(){
         for(var i=0;i<YUNMUSIC_TOP.length;i++){
           getTop(YUNMUSIC_TOP[i]).then((res)=>{
            if(res.data.code=== 200){
              let list = res.data.playlist
              list.top = res.data.playlist.tracks.slice(0,3)
              this.yunTopList.push(list)
            }
           })
         }
       }

      }
    }
</script>

<style lang="scss" scoped>
  @import "./../../common/scss/variable";
  @import "./../../common/scss/mixin";
.rank{
  width: 100%;
  height: 100%;
  bottom: 0;
  .toplist{
    height: 100%;
    overflow: hidden;
    padding-top: 5px;
    .item{
      display: flex;
      margin: 0 10px;
      padding: 3px 0;
      height: 100px;
      border-bottom:1px solid rgb(228,228,228) ;
      &:last-child{
        padding-bottom: 20px;
      }
      .icon{
        flex: 0 0 100px;
        width: 100px;
        height: 100px;
        img{
          border-radius: 3px;
          width: 100px;
          height: 100px;
        }
      }
      .songList{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 20px;
        height: 100px;
        overflow: hidden;
        color: $color-text;
        font-size: $font-size-small-x;
        .song{
          line-height: 30px;
          @include no-wrap();
        }
      }
    }
  }
}
</style>
