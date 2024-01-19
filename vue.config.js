const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  //保存代码浏览器自动刷新
  devServer: {
    host:'localhost',
    open: true,
    port: 8089
  },
  //打开在默认浏览器
  transpileDependencies: true,
  lintOnSave : false
})
