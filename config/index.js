'use strict'
//  开发环境下的配置
const path = require('path')
const devEnv = require('./dev.env')

module.exports = {
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // 代理列表, 是否开启代理通过[./dev.env.js]配置
    proxyTable: devEnv.OPEN_PROXY === false ? {} : {
      '/xlzscx': {
        target: 'http://172.31.2.61:7788/xlzscx',
        changeOrigin: true,
        pathRewrite: {
          '^/xlzscx': '/'
        }
      }
    },
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8001, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,
    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'eval-source-map',
    cacheBusting: true,
    cssSourceMap: false
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
