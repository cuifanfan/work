function memorize(f) {
  let cache = {}
  return function() {
    let key = arguments.length + Array.prototype.join(arguments, ',')
    if (key in cache) return cache[key]
    else return cache[key] = f.apply(this, arguments)
  }
}

var memorize = function(func, hasher) {

  var momoize = function(key) {
    var cache = momoize.cache
      // 有哈希函数就根据参数进行哈希化、没有就根据第一个参数
    var address = '' + (hasher ? hasher.apply(this, arguments) : key)
    if (!cache[address]) {
      cache[address] = func.apply(this, arguments)
    }
    return cache[address]
  }
  momoize.cache = {}
  return momoize
}

// function add(a, b, c) {
//   return a + b + c
// }

// let memoizedAdd = memorize(add, function() {
//   let args = Array.prototype.slice.call(arguments)
//   return JSON.stringify(args)
// })
// console.log(memoizedAdd(1, 2, 3));
// console.log(memoizedAdd(1, 2, 4));

function fibonacci(n) {
  if (n < 2) return n + 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}
console.log(fibonacci(4));