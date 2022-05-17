// 返回首次调用的Date对象
// var t

// function foo() {
//   if (t) return t
//   t = new Date()
//   return t
// }

// var foo = (function() {
//   let t
//   return function() {
//     if (t) return t
//     t = new Date()
//     return t
//   }
// })()

// function foo() {
//   if (foo.t) return foo.t
//   foo.t = new Date()
//   return foo.t
// }

// 惰性函数
// var foo = function() {
//   let t = new Date()
//   foo = function() {
//     return t
//   }
//   return foo()
// }