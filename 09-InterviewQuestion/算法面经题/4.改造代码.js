// 能输出0 - 9
// for (var i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000)
// }

// 1.IIFE
// for (var i = 0; i < 10; i++) {
//   (function(i) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000)
//   })(i)
// }

// 2.块级作用域
// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000)
// }

// 3.借助Promise传值
// for (var i = 0; i < 10; i++) {
//   new Promise((resolve, reject) => {
//     resolve(i)
//   }).then(value => {
//     setTimeout(() => {
//       console.log(value);
//     }, 1000)
//   })
// }

// 4.直接给setTimeout传递函数
// for (var i = 0; i < 10; i++) {
//   setTimeout(console.log, 1000, i)
// }

// 5.同4
// for (var i = 0; i < 10; i++) {
//   setTimeout(eval('console.log'), 1000, i)
// }

// for (var i = 0; i < 10; i++) {
//   setTimeout(new Function('console.log'), 1000, i)
// }