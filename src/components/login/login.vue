<template>
  <transition name="login">
    <div class="logininfor">
      <div class="login-back" @click="back">
        <i class="iconfont iconfanhui"></i>
        <span>登录</span>
      </div>
      <div class="btn">
        <div class="loginbtn">
          <router-link to="/login">
            <el-button type="danger" size="medium" round style="width: 70%">手机号登录</el-button>
          </router-link>
        </div>
        <div class="registebtn">
          <router-link to="./login">
            <el-button round style="width: 70%">注册</el-button>
          </router-link>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "login",
    methods:{
      back(){
        this.$router.back()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./../../common/scss/variable";
  .logininfor{
    position: fixed;
    top:0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 100;
    background-color: $color-background;
    &.login-enter-active,&.login-leave-avtive{
      transition: all 0.5s;
    }
    &.login-enter,&.login-leave-to{
      transform:translate3d(50%,50%,0);
      opacity: 0.5;
    }
    .login-back{
      position: relative;
      left: 10px;
      margin-top: 10px;
    }
    .btn{
      position:relative;
      left: 15%;
      top:40%;
      margin: 0;
      padding: 0;
      display: table;
      width: 100%;
      margin: 0 auto;
      .loginbtn,.registebtn{
        margin-top: 10px;
      }
    }
  }

</style>

