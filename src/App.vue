<template>
  <div id="app">
    <!--路由页面，切换动效及缓存-->
    <transition :name="transitionName">
      <keep-alive :include="keepAlivePages">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Vue from 'vue'
import router from './routers'
import { loading } from 'vant'

// Vue.use(loading)


export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data(){
    return{
      loadStatus: true,
    }
  },
  computed:{
    // 页面缓存对象
  },
  watch: {
    
  },
  beforeCreate() {
    
  },
  mounted() {
    
  },
  methods: {
    
  }
}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
