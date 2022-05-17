// 1.使用promise
// const sleep = time => new Promise((resolve) => {
//   setTimeout(resolve, time)
// })

// sleep(5000).then(() => {
//   console.log(1);
// })

// 2.使用async
// function sleep(time) {
//   return new Promise((resolve) => setTimeout(resolve, time))
// }

// (async function() {
//   console.log(1);
//   await sleep(5000)
//   console.log(2);
// })()

// 3.ES5传统方式
// function sleep(callback, time) {
//   if (typeof callback === 'function') setTimeout(callback, time)
// }

// console.log(1);
// sleep(() => {
//   console.log(2);
// }, 5000)

// 4.最优雅的方式
function sleep(time) {
  let start = +new Date()
  while (+new Date - start < time) {}
}

console.log(1);
sleep(5000)
console.log(2);