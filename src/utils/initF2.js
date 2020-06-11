/*
 * @Author: your name
 * @Date: 2020-06-03 18:00:11
 * @LastEditTime: 2020-06-11 16:31:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\utils\initF2.js
 */
import Vue from 'vue'

const F2 = require('@antv/f2')
// 按需加载需要的插件
require('@antv/f2/lib/geom') //引入所有
require('@antv/f2/lib/geom/point') //点， 用于点图的构建
require('@antv/f2/lib/geom/path') //路径，无序的点连接而成的一条线
require('@antv/f2/lib/geom/line') //线，点按照 x 轴连接成一条线，构成线图 例如折线
require('@antv/f2/lib/geom/area')
require('@antv/f2/lib/geom/interval') //使用矩形或者弧形，用面积来表示大小关系的图形，一般构成柱状图、饼图等图表。
// ...
// 绘制图表的辅助元素
const Guide = require('@antv/f2/lib/plugin/guide')
//要啥取啥

// 引入插件注册
F2.Chart.plugins.register([
  Guide
])

Vue.prototype.$F2 = F2