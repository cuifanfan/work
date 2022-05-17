// 项目入口文件
const math = require('./mainUtils')

console.log('hello webpack!');
console.log(math.add(10, 20));
console.log(math.mul(10, 20));

// 引用css文件
require('./normal.css')

// 引入less文件
require('./special.less')
import App from './App.vue'
import Vue from 'vue'
new Vue({
  el: '#app',
  template: '<App/>',
  data: {
    message: 'hello webpack',
  },
  components: {
    App
  }
})