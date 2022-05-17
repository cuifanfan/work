const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
const baseConfig = require('./base.config')
const webpackMerge = require('webpack-merge')

module.exports = webpackMerge(baseConfig, {
  plugins: [
    new webpack.BannerPlugin('最终解释权归崔帆所有'),
    new htmlWebpackPlugin({
      // 根据这个模板来生成一个index.html文件到dist文件夹
      template: 'index.html'
    }),
    new uglifyJsPlugin()
  ],
})