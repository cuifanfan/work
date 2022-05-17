// 偏函数

// 把一个n元函数转换为1元和n-1元函数
function partial(fn) {
  let args = [].slice.call(arguments, 1)
  return function() {
    let position = 0
    let len = args.length
    for (let i = 0; i < len; i++) {
      if (args[i] === '_') args[i] = arguments[position++]
    }
    while (position < arguments.length) args.push(arguments[position++])
    return fn.apply(this, args)
  }
}

function add(a, b, c) {
  return a + b + c
}

let a1 = partial(add, 1, 2)
let a2 = a1(3)
console.log(a2);