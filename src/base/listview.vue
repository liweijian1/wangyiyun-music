<template>
    <scroll class="listview" ref="listview">
      <ul>
        <li v-for="group in data" :key="group.id" class="list-group">
          <h2 class="list-group-title">{{group.title}}</h2>
          <ul>
            <li v-for="item in group.items" :key="item.id" class="list-group-item">
              <img v-lazy="item.avatar" class="avatar"/>
              <span class="name">{{item.name}}</span>
            </li>
          </ul>
        </li>
      </ul>
      <div class="list-shortcut">
        <ul>
          <li v-for="(item,index) in shortcutlist" :key="index.id" class="item">{{item}}</li>
        </ul>
      </div>
    </scroll>
</template>

<script>
    import Scroll from "./scroll";
    export default {
        name: 'listview',
      components: {Scroll},
      props:{
          data:{
            type:Array
          }
      },
      computed:{
          shortcutlist(){
            return this.data.map((group)=>{
              return group.title.substr(0,1)
            })
          }
      }
    }
</script>

<style lang="scss" scoped>
@import "./../common/scss/variable";

  .listview{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: $color-background;
    .list-group{
      .list-group-title{
        height: 20px;
        line-height: 20px;
        padding-left: 12px;
        margin-bottom: 10px;
        font-size: $font-size-small;
        color: #fff;
        background: rgba(0,0,0,0.1);
      }
      .list-group-item{
        display: flex;
        align-items: center;
        padding: 5px 0;
        margin: 0 5px;
        border-bottom: 1px solid rgb(228,228,228);
        .avatar{
          width: 50px;
          height: 50px;
          border-radius: 3px;
        }
        .name{
          margin-left: 20px;
          color: $color-text;
          font-size: $font-size-medium;
        }
      }
    }
    .list-shortcut{
      position: absolute;
      width: 20px;
      z-index: 30;
      top:50%;
      right: 3px;
      padding: 200px 0;
      border-radius: 3px;
      font-family: Helvetica;
      transform: translateY(-50%);
      .item{
        padding: 5px 5px;
        line-height: 1;
        color: $color-text-g;
        font-size: $font-size-small;
        font-weight: bold;
      }
    }
  }
</style>
