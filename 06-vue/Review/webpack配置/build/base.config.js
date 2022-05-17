const path = require('path')
module.exports = {
  // 入口:可以是字符串、数组、对象。我们这里只有一个文件
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'), // path通常是一个绝对路径
    filename: 'bundle.js',
    // publicPath: 'dist/'（会影响到打包html文件到dist文件夹中自动指定script路径）
  },
  module: {
    rules: [{
        // 匹配以.CSS结尾的文件
        test: /\.css$/,
        // css-loader只负责加载css文件，不负责将css具体样式嵌入到文档中
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }, {
        test: /\.(png|jpg|jpeg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            // 图片小于这个limit大小的时候，使用base64进行编码
            limit: 10000,
            name: 'img/[name].[hash:8].[ext]'
          }
        }]
      }, {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }, {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ],

  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },

}