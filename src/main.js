import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Vconsole from 'vconsole'

Vue.config.productionTip = false

// 手机端调试工具
new Vconsole()

// 路由切换动画
Vue.prototye.transtionName = 'slide-right'
// 原型挂载方法


new Vue({
  VueRouter,
  Vuex,
  render: h => h(App),
}).$mount('#app')