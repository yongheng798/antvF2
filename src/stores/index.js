import Vue from 'vue'
import Vuex from 'vuex'
import home from 'home'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    home
  },
  plugins: []
})

// 还可以这么处理
// const moduleA = {
//   state: () => ({

//   }),
//   mutations: {

//   },
//   actions: {

//   },
//   getters: {

//   }
// }

// const moduleB = {
//   state: () => ({

//   }),
//   mutations: {

//   },
//   actions: {

//   }
// }

// const store = new Vuex.Store({
//   modules: {
//     a: moduleA,
//     b: moduleB
//   }
// })

// store.state.a // -> moduleA 的状态
// store.state.b // -> moduleB 的状态