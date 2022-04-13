const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  externals: {
    'AMap': 'AMap', // 高德地图配置
    'AMapUI': 'AMapUI'
  }
})
