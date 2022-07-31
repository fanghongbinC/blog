<template>
  <div >

    <ul class="cb-slideshow">
      <li></li>
    </ul>

    <div id="main">
      <div class="login-form">
        <div class="form-header">账号</div>
        <div>
          <input type="text" class="form-control"  v-model="username">
        </div>
        <div class="form-header">密码</div>
        <div>
          <input type="password" class="form-control"  v-model="password">
        </div>

        <div class="btn-row">
          <button class="btn"  @click="login">
            登录
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import {login as Login } from "./helper";


export default {
  name:"login",
  data () {
    return {
      username: '',
      password: '',
      secretKey: 'shig'
    }
  },
  mounted(){
    //全局监听 回车事件
    document.onkeydown = (event)=> {
      var e = event || window.event;
      if (e && e.keyCode === 13) { //回车键的键值为13
           this.login()
      }
    };
  },
  methods: {
    login ()
    {
      if (this.username && this.password)
      {

        var bol = Login(this.username,this.password);
        if(bol){
          //登录成功 回答主页
          this.$router.push({ path: '/'});
        }

      }
    }
  }
}
</script>

<style lang="stylus">

#main{
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(https://jack-img.oss-cn-hangzhou.aliyuncs.com/img/20210605145847.jpg);
  background-size cover
}

.login-form
  padding: 1rem
  display flex
  flex-direction column
  box-sizing border-box
  height: 300px;
  width: 400px;
  background: #FFF;
  border-radius: 10px;
  opacity: 0.5;

  .btn-row
    margin-top 1rem
  .btn
    padding 0.6rem 2rem
    outline none
    background-color #60C084
    color white
    border 0
    border-radius: 3px;
  .form-header
    color #666
    margin-bottom 0.5rem
  .form-control
    padding 0.6rem
    border 2px solid #ddd
    width 100%
    margin-bottom 0.5rem
    box-sizing border-box
    outline none
    transition border 0.2s ease
    &:focus
      border 2px solid #aaa

 @keyframes imageAnimation {
   0% {
     //opacity: 0;
     transform: scale(1);
     animation-timing-function: ease-in;
   }
   100% {
     //opacity: 0.4;
     transform: scale(3);
     animation-timing-function: ease-in;
     //animation-timing-function: ease-out;
   }
 }

.cb-slideshow li {
  width:100%;
  height:100%;
  position:absolute;
  top:0px;
  left:0px;
  color:transparent;
  background-size:cover;
  background-position:50% 50%;
  background-repeat:none;
  transform: scale(1);
  //opacity:0.8;
  z-index:-9999;
  -webkit-backface-visibility:hidden;
  -webkit-animation:imageAnimation 60s linear infinite 0s;
  -moz-animation:imageAnimation 60s linear infinite 0s;
  -o-animation:imageAnimation 60s linear infinite 0s;
  -ms-animation:imageAnimation 60s linear infinite 0s;
  animation:imageAnimation 60s linear infinite 0s;
}

.cb-slideshow li:nth-child(1) {
 background-image: url(http://img.qfgtt.cn/2022/04/20/34d8a23d65734cd591e3ce8cad064bf2.png);
}
</style>
