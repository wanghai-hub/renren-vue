'use strict'
// 开发配置文件
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  OPEN_PROXY: false // 是否开启代理, 重置后需重启vue-cli
})
