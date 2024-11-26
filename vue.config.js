const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/[repository-name]/'
    : '/Vue/'  // 개발 모드에서는 /Vue/ 경로를 사용
})
