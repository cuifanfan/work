// 1.回调函数(callback)
// 缺点：不能使用try，catch捕获错误。不能return
// 回调地狱得根本问题在于：
// 缺乏顺序性：
// 耦合度太高，一旦改动，牵一发而动全身
// 难以处理错误
// 优点:解决了同步问题

// Promise:
// 解决了回调地狱的问题
// 缺点：无法取消

// 为什么解决了回调地狱?
// 回调地狱:存在多层嵌套问题;每种任务处理结果存在两种可能性,需要在每种任务执行完毕后分别控制这两种可能性
// (1)回调函数延迟执行
// (2)返回值穿透
// (3)异常冒泡
// 实现链式调用解决了回调嵌套的问题,实现错误冒泡后一站式处理. 
// 实现错误冒泡解决了海马错误混乱的的问题

// 为什么引入微任务?
// 同步回调:整个脚本阻塞,当前任务等待,后面的任务无法执行.CPU利用率非常低,无法实现延迟绑定,效率问题
// 使用宏任务:时间颗粒度太大,实时性问题
// 微任务:CPU效率和回调执行的实时性得到了满足

// Generator
// 可以控制函数的执行，配合CO库函数使用

// Async / await
// 优点:代码清晰,不用像Promise一样写一大堆then链,处理了回调地狱的问题
// 缺点:将异步代码改造为同步代码,如果多个异步操作没有依赖性而使用await会造成性能上的浪费(没有依赖性完全可以使用promise.all)

// let a = 0
// let b = async() => {
//   a = a + await 10
//   console.log('2', a)
// }
// b()
// a++
// console.log('1', a)

Promise.prototype.myFinally = function(callback) {
  return this.then(value => Promise.resolve(callback()).then(() => value),
    error => Promise.resolve(callback).then(() => error)
  )
}

let p = new Promise((resolve) => {
  setTimeout(resolve, 2000, 'myFinally')
})

p.myFinally(function() {
  console.log('myFinally');
}).then(value => {
  console.log('then', value);
})

// p.then(val => {
//   console.log('then', val);
// })