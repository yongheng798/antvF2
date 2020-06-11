<!--
 * @Author: your name
 * @Date: 2020-06-04 09:12:44
 * @LastEditTime: 2020-06-11 15:39:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\components\f2charts\ChartBarLine.vue
--> 
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
          chart.source()
          chart.clear()
        }
      },
      immediate: true
    }
  },
  mounted() {
    
  },
  computed: {
    // 
  },
  methods: {
    initChart(){
      this.$nextTick(()=>{
        this.handleChartData(this.chartBarLineData,this.chartColDefsData)
        this.chartCreat(this.chartBarLineData,this.chartColDefsData)
      })
    },
    // 创建柱形图画布
    chartCreat(chartData,chartColDefsData){
      if(!this.chart){
        const chart = new this.$F2.Chart({
          id:'ChartBarLine' + this.randomID,
          pixelRatio: window.devicePixelRatio, //屏幕画布的像素比
          padding:[0,0,0,0],
          width: window.clientWidth,
          height:300,
          animate:true //是否关闭 chart 的动画
        })
        // 装载数据 chartColDefsData可选，列定义配置（各个字段的度量配置）
        chart.source(chartData, chartColDefsData)

        chart.interval().position('date*steps').style({
          radius: [ 2, 2, 0, 0 ]
        });
        
        // 坐标轴配置
        chart.axis('field', {
          line: {
            lineWidth: 1,
            stroke: '#ccc',
            top: true, // 展示在最上层
          }, // 设置坐标轴线的样式，如果值为 null，则不显示坐标轴线，图形属性
          labelOffset: 20, // 坐标轴文本距离轴线的距离
          tickLine: {
            lineWidth: 1,
            stroke: '#ccc',
            length: 5,// 刻度线长度
          }, // 坐标点对应的线，null 不显示，图形属性
          grid: (text, index, total) => {
            if(text === '0%') { // 0％ 处的栅格线着重显示
              return {
                stroke: '#efefef'
              };
            }
            return {
              stroke: '#f7f7f7'
            }
          },
          label: (text, index, total) => {
            const cfg = {
              textAlign: 'center'
            };
            // 第一个点左对齐，最后一个点右对齐，其余居中，只有一个点时左对齐
            if (index === 0) {
              cfg.textAlign = 'start';
            }
            if (index > 0 && index === total - 1) {
              cfg.textAlign = 'end';
            }
            cfg.text = text + '%';  // cfg.text 支持文本格式化处理
            return cfg;
          }
});
        // 定义进度条
        chart.scrollBar({
          mode: 'x',
          xStyle: {
            backgroundColor: '#e8e8e8',
            fillerColor: '#808080',
            offsetY: -2
          }
        });
        chart.interaction('pan');//平移
        chart.render();
      }
    },
    handleChartData(){
      // 处理图表数据
      const chartData = []
      // 处理刻度数据
      const ticksData = []
      // 处理图例数据
      const gemoData = []
      // 处理图例数据
      const legendData = {}
      // 坐标轴配置
      const axisData = {}
      // 处理提示
      
    }
  },
}
</script>

<style scoped>
</style>