import Vue from 'vue'

const F2 = require('@antv/f2')
// 按需加载需要的插件
require('@antv/f2/lib/geom/interval') //柱形图
require('@antv/f2/lib/geom/line') //折线图
// ...
// 引入对应的模块
const Guide = require('@antv/f2/lib/plugin/guide')
//要啥取啥

F2.Chart.plugins.register([
  Guide
])

Vue.prototype.$F2 = F2
