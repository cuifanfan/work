// 参数的求值策略：传值调用和传名调用。JavaScript是传值调用，JavaScript中，Thunk函数替换的不是表达式，而是多参数函数。
// JavaScript中的Thunk函数替换的不是表达式，二十多参数函数，将其替换为单参数版本，且只接受回调函数作为参数
function Thunk(fn) {
  return function() {
    let args = [].slice.call(arguments)
    let self = this
    return function(callback) {
      let flag = false
      args.push(function() {
        // 这里设置标识位，回调只会执行一遍
        if (flag) return
        flag = true
        callback.apply(null, arguments)
      })
      fn.apply(self, args)
    }
  }
}


const {
  log
} = require("console")

// function add(a, b, callback) {
//   let sum = a + b
//   callback(sum)
//   callback(sum)
// }

// let addThunk = Thunk(add)
// addThunk(1, 2)(console.log)

// 配合Generator 函数的自动流程管理
let fs = require('fs')
let readFileThunk = Thunk(fs.readFile)

// yeild命令把主线程上的协程由gen切换为全局协程（程序控制权由函数内部交到函数外部）
function* readFile() {
  let r1 = readFileThunk('./test.txt')
  console.log(r1.toString());
  let r2 = yield readFileThunk('./test1.txt')
  console.log(r2.toString());
}

// 全局协程中指定回调， 然后使用gen.next() 传入参数把控制权交回函数（协程切换为gen）---> r1拿到的是readFileThunk('./test.txt')外部回调中传回的值
function run(fn) {
  // fn为Generator函数
  let gen = fn()

  function next(err, data) {
    let result = gen.next(data)
    if (result.done) return
    return result.value(next)
  }
  next()
}
run(readFile)