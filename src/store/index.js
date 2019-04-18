import Vue from 'vue';
import Vuex from 'vuex';
import state from './state'

import mutations from './mutations'
Vue.use(Vuex);


const store = new Vuex.Store({
    state,
    mutations,
});




//导出存储对象store，给main.js使用
export default store;