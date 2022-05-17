// 重新定义相等：
// 1. NaN和NaN是相等 +
// 2. [1] 和 [1]是相等
// 3. {value:1}和{value:1}是相等


// 还有：
// 1.  1 和 new Number(1)是相等
// 2. 'Curly' 和 new String('Curly')相等
// 3. true 和 new Boolean(true) 相等

// （1）+0 和 -0
// JS默认二者是相等的、没有差别。
// 但是在一个地方二者的表现不太一样。就是在涉及到符号的表示的时候
// console.log(+0 === -0); // true

// console.log(1 / -0); // -Infinity
// console.log(1 / +0); // Infinity
// console.log(1 / -0 !== 1 / +0); // true



let toString = Object.prototype.toString

function isFunction(obj) {
  return toString.call(obj) === '[object Function]'
}

function deepEq(a, b) {
  // 首先先处理typeof 为 object的情况
  let className = toString.call(a)

  // 类型不相同肯定不会相等 -> 直接false
  if (className !== toString.call(b)) return false

  // 先判断对象和对象、基本类型和对象的情况
  switch (className) {
    case '[object RegExp]':
    case '[object String]':
      return '' + a === '' + b
    case '[object Number]':
      // 这里还要考虑NaN和NaN
      if (+a !== +a) return +b !== +b
      return +a !== 0 || 1 / +a === 1 / +b
    case '[object Date]':
    case '[object Boolean]':
      return +a === +b
  }

  // 是不是数组
  let areArray = className === '[object Array]'
  if (!areArray) {
    // 不是数组
    // 过滤两个函数的情况
    if (typeof a !== 'object' || typeof b !== 'object') return false

    // a,b 现在全都是typeof 为object
    let aCtor = a.constructor
    let bCtor = b.constructor


    //  （1）('constructor' in a && 'constructor' in b) 两个构造函数都存在 （2） aCtor !== bCtor 两个构造函数不相等 （3） 两个函数其中不都是Object函数  
    if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && ('constructor' in a && 'constructor' in b))
      return false

  } else {
    let keys = Object.keys(a) // a的下标组成的数组
    let length = keys.length
    let key
    if (Object.keys(b).length !== length) return false

    while (length--) {
      key = keys[length]
      if (!(b.hasOwnProperty(key) && eq(a[key], b[key]))) return false
    }
  }
  return true
}

function eq(a, b) {
  // 希望能区别出 +0 和 -0
  if (a === b) return a !== 0 || 1 / a === 1 / b

  // 判断出NaN
  if (a !== a) return b !== b

  // 其中一值为null或者undefined，直接返回faLse
  if (a == null || b == null) return false

  // 判断参数a类型、如果是基本类型(b可以为基本类型或函数),这里可返回false // b为函数类型可以直接return false了，因为基本类型不可能与函数类型相等
  let type = typeof a
  if (type !== 'object' && type !== 'function' && typeof b !== 'object') return false

  return deepEq(a, b)
}