// 模拟其他语言的sleep
// 阻塞主线程

// function sleep(timeout) {
//   return new Promise((resolve) => setTimeout(resolve, timeout))
// }

// (async() => {
//   console.log(1);
//   await sleep(2000)
//   console.log(2);
// })()

// function sleep(delay) {
//   var start = new Date().getTime();
//   while (new Date().getTime() < start + delay) {}
// }

// console.log(1);
// sleep(2000)
// console.log(2);

// 1.最优雅的方式，使用时间戳
// function sleep(delay) {
//   let start = +new Date()
//   while (+new Date() - start < delay) {}
// }

// console.log(1);
// sleep(2000)
// console.log(2);

// 2.使用async/await配合await
// function sleep(timeout) {
//   return new Promise((resolve) => setTimeout(resolve, timeout))
// }

// (async() => {
//   console.log(1);
//   await sleep(2000)
//   console.log(2);
// })()

// 3.使用Promise
// function sleep(timeout) {
//   return new Promise(resolve => setTimeout(resolve, timeout))
// }

// console.log(1);
// sleep(2000).then(() => {
//   console.log(2);
// })