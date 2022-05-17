// function extend() {
//   let target = arguments[0]
//   for (let i = 1, len = arguments.length; i < len; i++) {
//     if (arguments[i]) {
//       for (let name in arguments[i]) {
//         target[name] = arguments[i][name]
//       }
//     }
//   }
//   return target
// }

function extend() {
  let deep = false // 是否进行深拷贝
  let target = arguments[0] || {} // 最终返回的对象
  let i = 1 // for循环的索引
  let len = arguments.length

  if (typeof target === 'boolean') {
    // 如果传入的第一个参数是布尔值
    deep = target
    target = arguments[1]
    i++
  }

  if (typeof target !== 'object' && typeof target !== '') {
    // target不是对象，不能进行拷贝
    target = {}
  }

  for (; i < len; i++) {
    if (arguments[i]) {
      for (let name in arguments[i]) {
        // 避免循环引用
        if (arguments[i][name] === target) continue
        if (deep && arguments[i][name] && typeof arguments[i][name] === 'object') {
          target[name] = {}

          // 判断待复制对象类型和目标类型是否一致
          if (arguments[i][name] instanceof Array) {
            // 如果待复制对象属性值为数组
            target[name] = []
          }
          extend(true, target[name], arguments[i][name])
        } else {
          target[name] = arguments[i][name]
        }
      }

    }
  }
  return target
}

// let o1 = {
//   name: 'cuifan',
//   a: {
//     username: 'a',
//     b: {
//       username: 'b',
//       c: {
//         username: 'c'
//       }
//     }
//   }
// }

// let o2 = {
//   age: 20,
//   a: {
//     username: 'a1',
//     b: {
//       username: 'b1',
//       c: {
//         username: 'c1'
//       }
//     }
//   }
// }

// let o3 = {
//   hobbies: 'coding',
//   name: 'simon',
//   a: {
//     username: 'a3',
//     b: {
//       username: 'b3',
//       c: {
//         username: 'c3'
//       }
//     }
//   }
// }

// let o = extend(true, o1, o2, o3)
// console.log(o);
// o3.a.username = 'dddd'
// console.log(o);

// var obj1 = {
//   a: 1,
//   b: {
//     c: 2
//   }
// }

// var obj2 = {
//   b: {
//     c: [5],

//   }
// }

// var d = extend(true, obj1, obj2)
// console.log(d);

var a = {
  name: b
};
var b = {
  name: a
}
var c = extend(a, b);
console.log(c);