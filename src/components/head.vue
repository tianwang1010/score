<template>
  <div class="bigSquare">
    <div id="top">
      <div class="top_main">
        <div class="topLeft">
          <a href="/" class="logo">
            <img :src="logo" style="width:120px;padding-top:5px;" alt>
          </a>
          <ul class="uls">
            <li v-for="(site,index) in nav" :key="index">
              <router-link :to="site.to" >{{site.name}}</router-link>
            </li>
            <li>
      <a href="http://hao.dongqiudi.com/home">懂球号</a>
            </li>
          </ul>
        </div>
        <div class="topRight">

         
           <router-link to="/login" v-if='$store.state.info!=1'>
           欢迎{{$store.state.info.username}}</router-link>
            <router-link to="/login" v-else>登陆</router-link>
        </div>
          <router-link to="/cop" class='adCop'>广告合作</router-link>
      </div>
    </div>
   <keep-alive>
     <transition name='router'>
         <router-view :key='key'></router-view>
     </transition>
 
   </keep-alive>
    <goTop></goTop>
    <foot></foot>
  </div>
</template>
<script>
import foot from "./foot"
import goTop from './goTop'
import logo from "../../static/img/logo.png";
export default {
  name: "top",
  data() {
    return {
      logo,
      nav: [
        { name: "首页", to: "/index" },
        { name: "比赛", to: "/match" },
        { name: "数据", to: "/data" },
        { name: "APP", to: "/app" },
      ],
    };  
  },
  computed:{
	    key(){
	        return this.$route.path + Math.random();
      }
  },
  methods:{
    change(index){
      this.active = index;
    }
  },
  components:{
    foot,
    goTop,
  }
};
</script>
<style scoped>
.router-enter{
  opacity: 0;
}
.router-enter-active{
  transition: opacity 0.5s ease;
}
.router-enter-to{
  opacity: 1;
}
.router-leave{
  opacity: 1;
}
.router-leave-active{
  transition: opacity 0.5s ease;
}
.router-leave-to{
  opacity: 0;
}
#top {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  box-sizing: content-box;
  width: 100%;
  height: 60px;
  background: #ffffff;
  box-shadow: 0 0 10px #cccccc;
}
#top .top_main {
  margin: 0 auto;
  width: 1000px;
  height: 60px;
  letter-spacing: 0;
  font-size: 0;
}
.topLeft {
  display: inline-block;
  width: 800px;
}
.logo {
  float: left;
  overflow: hidden;
  padding: 10px 0;
  width: 175px;
  height: 30px;
  line-height: 30px;
  color: black;
}
.logo img {
  width: 120px;
  padding-top: 5px;
}
.uls {
  overflow: hidden;
  width: 625px;
}
.uls li {
  float: left;
  box-sizing: border-box;
  margin-right: 1px;
}
.uls li:hover .hoverYa {
  background: #16b13a;
  color: #ffffff;
}
.uls a {
  display: inline-block;
  width: 80px;
  line-height: 60px;
  font-size: 18px;
  text-align: center;
  color: black;
}
.uls .router-link-exact-active{
  background: #16b13a;
      color: #ffffff;
}
.topRight {
  font-size: 16px;
  width: 200px;
  float: right;
  line-height: 60px;
}
.topRight a {
  color: #16b13a;
}
.adCop {
  font-size: 16px;
  position: absolute;
  right: 100px;
  display: inline-block;
  line-height: 60px;
}
a{
  color: black;
}
</style>
