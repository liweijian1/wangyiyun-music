<template>
  <div class="registe">
    <div class="login-button">
        <router-link to="/login" tag="button">立即登录</router-link>
    </div>
    <div class="menuname">
      <span v-for="item in menu">{{item}}</span>
    </div>
    <div>
      <ul>
        <li v-for="item in setting" class="settingname">
          <span class="name">{{item}}</span>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li v-for="item in merroy" class="merroyname">
          <span class="name">{{item}}</span>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li v-for="item in share" class="sharename">
          <span class="name">{{item}}</span>
        </li>
      </ul>
    </div>
    <div></div>
    <div></div>
<!--    <div class="login-button">-->
<!--      <span>退出登录</span>-->
<!--    </div>-->
  </div>
</template>

<script>
    export default {
        name: "registe",
        data(){
          return{
            menu:['消息','商城','演出','个性换肤'],
            setting:["设置","夜间模式","定时关闭","音乐闹钟"],
            merroy:["在线听歌免流量","精品游戏推荐","优惠券"],
            share:["分享网易云音乐","关于"]
          }
        }
    }
</script>

<style lang="scss" scoped>
  @import "./../../common/scss/variable";
  .registe{
    width: 100%;
    height: 100%;
    position:absolute;
    top:44px;
    bottom: 44px;
    background: #eeeeee;
    display: flex;
    overflow-y: scroll ;
    flex-flow: column;
    div{
      width: 100%;
      margin-bottom: 10px;
      background: white;
    }
    .login-button{
        text-align: center;
        button{
          border: 1px solid #eeeeee;
          background-color: white;
          border-radius: 5px;
          width: 45%;
          height: 40px;
          margin: 10px 0;
          text-align: center;
          //color: $color-theme;
          font-size:$font-size-medium;
        }
    }
    .menuname{
      height: 50px;
      display: flex;
      align-items: center;
      text-align: center;
      color: $color-text;
      font-size: $font-size-medium;
      span{
        flex: 1;
      }
    }
    .settingname{
      display: flex;
      align-items: center;
      padding: 10px 0;
      margin: 0 10px;
      border-bottom: 1px solid rgb(228,228,228);
      .name{
        margin-left: 20px;
        color: $color-text;
        font-size: $font-size-medium;
      }
    }
    .merroyname{
      display: flex;
      align-items: center;
      padding: 10px 0;
      margin: 0 10px;
      border-bottom: 1px solid rgb(228,228,228);
      .name{
        margin-left: 20px;
        color: $color-text;
        font-size: $font-size-medium;
      }
    }
    .sharename{
      display: flex;
      align-items: center;
      padding: 10px 0;
      margin: 0 10px;
      border-bottom: 1px solid rgb(228,228,228);
      .name{
        margin-left: 20px;
        color: $color-text;
        font-size: $font-size-medium;
      }
    }
  }
</style>
