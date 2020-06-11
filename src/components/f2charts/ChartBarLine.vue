<template>
  <div class="chartContainer">
    <canvas :id="'ChartBarLine' + randomID "></canvas>
  </div>
</template>

<script>
import chartBarLineData from '../../service/json/chartBarLineData'
export default {
  name: 'ChartBarLine',
  props:{
    chartBarLineData:{
      type: Object,
      required: true,
      default: ()=>{}
    },
    chartColDefsData:{
      type: Array,
      // required:true,
      default: ()=>[]
    }
  },
  data() {
    return {
      randomID: parseInt(Math.random() * 10000,10),
      chart: null
    }
  },
  watch: {
    chartData:{
      handler() {
        // 监听数据变换
        if(this.chart){
          this.chart.source()
          this.chart.clear()
        }
      },
      immediate: true
    }
  },
  mounted() {
    
  },
  computed: {
    
  },
  methods: {
    initChart(){
      this.$nextTick(()=>{
        this.chartCreat(this.chartBarLineData,this.chartColDefsData)
      })
    },
    // 创建柱形图画布
    chartCreat(chartData,chartColDefsData){
      if(!this.chart){
        this.chart = new this.$F2.Chart({
          id:'ChartBarLine' + this.randomID,
          pixelRatio: window.devicePixelRatio, //屏幕画布的像素比
          padding:[0,0,0,0],
          width: window.clientWidth,
          height:300,
          animate:true //是否关闭 chart 的动画
        })
        // 装载数据 chartColDefsData可选，列定义配置（各个字段的度量配置）
        this.chart.source(chartData, chartColDefsData)

        this.chart.interval().position('date*steps').style({
          radius: [ 2, 2, 0, 0 ]
        });
        // 定义进度条
        this.chart.scrollBar({
          mode: 'x',
          xStyle: {
            backgroundColor: '#e8e8e8',
            fillerColor: '#808080',
            offsetY: -2
          }
        });
        this.chart.interaction('pan');//平移
        this.chart.render();
      }
    }
  },
}
</script>

<style scoped>
</style>