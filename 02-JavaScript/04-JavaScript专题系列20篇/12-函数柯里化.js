// // let curry = function(fn) {
// //   // 获取调用curry时候传入的实参
// //   let args = [].slice.call(arguments, 1)
// //   return function() {
// //     // [].slice.call(obj)可以把类数组对象转换为数组
// //     let newArgs = args.concat([].slice.call(arguments))
// //     return fn.apply(this, newArgs)
// //   }
// // }

function subCurry(fn) {
  // 传入fn函数和部分参数，返回fn函数,可以继续传参数
  let args = [].slice.call(arguments, 1)
  return function() {
    return fn.apply(this, args.concat([].slice.call(arguments)))
  }
}

function curry(fn, length) {
  // 函数的length是fn形参的数量
  length = length || fn.length

  let slice = Array.prototype.slice

  return function() {
    if (arguments.length < length) {
      // 传入的实参的数量小于length
      let newArgs = [fn].concat(slice.call(arguments))
      return curry(subCurry.apply(this, newArgs), length - arguments.length)
    } else {
      return fn.apply(this, arguments)
    }
  }
}


function curry(fn, args, holes) {
  args = args || []
  holes = holes || []
  return function() {
    let newArgs = args.slice(0).concat(...arguments)

    if (newArgs.length < fn.length) {
      // 处理占位符
      newArgs.forEach((item, index) => {
        if (item === '+') holes.push(index)
      })

      return curry.call(this, fn, newArgs, holes)
    } else {
      return fn.apply(this, fn, newArgs.slice(0, fn.length))
    }
  }
}

function add(a, b, c) {
  return a + b + c
}

let addCurry = curry(add)

let a = addCurry(1)('+')(3)(2)
console.log(a);

// function curry(fn, ...args) {
//   return function() {
//     let newArgs = args.concat(...arguments)
//     if (newArgs.length < fn.length) {
//       return curry.call(this, fn, ...newArgs)
//     } else {
//       return fn.apply(this, newArgs)
//     }
//   }
// }