<template>
  <div class="child">
    <h3>这里是子组件</h3>
    <div>hello world</div>
    <slot :data="data"></slot>
    <h5>我来了了了了哈哈哈</h5>
    <p>《mod》</p>
    <popup-picker>
      <nuxt-link to></nuxt-link>
    </popup-picker>
    <div>I am change</div>
  </div>
</template>

<script>
  export default {
      data: function(){
        return {
          data: ['zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba']
        }
      },
    computed: {

    },
    methods:{

    },
    components: {

    }
  }
</script>

<style scoped>
.child {
  background-color: #00bbff;
  width: 100%;
  padding: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
