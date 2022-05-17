// 1. 同步和异步任务分别进入不同的执行"场所"，同步的进入主线程(JS引擎)，异步的进入工作线程（JS运行时）并注册函数
// 2. 异步任务完成以后，工作线程(JS运行时)会把回调添加到消息队列【宏任务加到宏任务队列、微任务加到微任务队列】
// 3. 主线程当前函数调用栈执行完毕之后，从微任务队列中取出回调执行
// 4. 微任务执行完毕之后、从消息队列中获取对应的函数进入主线程执行
// 5. 上述过程重复执行


// 执行多指的是JS引擎、JS引擎在不同的环境（node、浏览器...）下表现是不同的
// JS运行时大多指的是解析引擎、是统一的
// JS引擎只维护一个消息队列、JS运行时则负责往这个消息队列里面添加任务

// setTimeout(function() {
//   console.log('定时器开始啦')
// });

// new Promise(function(resolve) {
//   console.log('马上执行for循环啦');
//   for (var i = 0; i < 10000; i++) {
//     i == 99 && resolve();
//   }
// }).then(function() {
//   console.log('执行then函数啦')
// });

// console.log('代码执行结束');

console.log('1');

setTimeout(function() {
  console.log('2');
  process.nextTick(function() {
    console.log('3');
  })
  new Promise(function(resolve) {
    console.log('4');
    resolve();
  }).then(function() {
    console.log('5')
  })
})
process.nextTick(function() {
  console.log('6');
})
new Promise(function(resolve) {
  console.log('7');
  resolve();
}).then(function() {
  console.log('8')
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
      console.log('10');
    })
    new Promise(function(resolve) {
      console.log('11');
      resolve();
    }).then(function() {
      console.log('12')
    })
  })
  // 微：[6,8]
  // 宏：[]
  // 1 7 6 8 2 4 3 5 9 11 10 12