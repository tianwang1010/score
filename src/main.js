// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'//引入store
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.prototype.getViewportSize = function(){
  return {
    width:window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height:window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
  }
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  mounted() {
    const size = this.getViewportSize();
    console.log(size);
  },
})
