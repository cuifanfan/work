// 文章链接：https://juejin.cn/post/6844903474212143117
// for (var i = 0; i < 5; i++) {
// (function(i) {
//   setTimeout(() => {
//     console.log(i);
//   })
// })(i)

// setTimeout((j) => {
//   console.log(j);
// }, 1000, i)
// }

// console.log(i);

// for (var i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log(i);
//   })
// }

// console.log(i);

// 打印 0 1 2 3 4 5每隔1s,0立即打印
// 映射问题：在一系列异步操作之后执行某种操作 打印5变为--->Promise.all().then()
// let tasks = []
// for (var i = 0; i < 5; i++) {
//   tasks.push(new Promise((resolve) => {
//     (function(i) {
//       setTimeout(function() {
//         console.log(i);
//         resolve()
//       }, 1000 * i)
//     })(i)

//   }))
// }

// Promise.all(tasks).then(() => {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000)
// })

// 模拟sleep
// let sleep = (time) => new Promise(resolve => {
//   setTimeout(resolve, time)
// })

// !(async function() {
//   for (var i = 0; i < 5; i++) {
//     if (i > 0) {
//       await sleep(1000)
//     }
//     console.log(i);
//   }
//   await sleep(1000)
//   console.log(i);
// })()