function subCurry(fn) {
  // 收集参数
  let args = [].slice.call(arguments, 1)
  return function() {
    return fn.apply(this, args.concat([].slice.call(arguments)))
  }
}

function curry(fn, length) {
  // 还需要传递的参数的长度
  length = length || fn.length
  return function() {
    if (arguments.length < length) {
      // 记录参数
      let args = [fn].concat([].slice.call(arguments))
      return curry(subCurry.apply(this, args), length - arguments.length)
    } else {
      // 柯里化完成
      return fn.apply(this, arguments)
    }
  }
}


var curry = (fn) => judge =
  (...args) => args.length === fn.length ? fn(...args) :
  (...arg) => judge(...args, ...arg)

function add(a, b, c, d, e) {
  return a + b + c + d + e
}

let addCurry = curry(add)
console.log(addCurry(1)(2)(3)(4)(5));