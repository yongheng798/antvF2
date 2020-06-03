// const path = require('path')

// const CompressionWebpackPlugin = require('compression-webpack-plugin')
// const { config } = require('process')

// const isProduction = process.env.NODE_ENV ==='production'

// console.log(isProduction)

// function resolve(dir){
//     return path.join(__dirname,dir)
// }

// module.exports = {
//     publicPath: '/',
//     outputDir: 'dist',
//     assetDir: 'static',
//     productionSourceMap: false,
//     transpileDependencies:[
//         'vue-echarts',
//         'resize-detector'
//     ],
//     chainWebpack:(config)=>{
//         // svg
//         const imageRule = config.module.rule('svg')
//         imageRule.uses.clear()
//         imageRule.use()
//     }
// }