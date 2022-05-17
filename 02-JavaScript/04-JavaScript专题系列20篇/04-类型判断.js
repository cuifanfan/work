// typeof 能检测出六种基本类型的值（特殊的null识别为object、function识别为function而不是object），但是除此之外Object还有很多细分的类型：Array、Function、Date、RegExp、Error等

// 可以借助Object.prototype.toString.call(具体的对象)，我们知道、当对象上没有toString方法的时候，会返回[object ObjectName],这个ObjectName就是对象具体的类型

// 当和字符串拼接的时候，会先调用对象的valueOf方法、一般情况下valueOf()返回对象自身的引用。然后再调用对象的toString方法、如果没有toString方法、会返回[object ObjectName] ObjectName是对象具体的类型


// let num = {
//   age: 1
// }
// let v = Object.prototype.toString
// Object.prototype.valueOf = function() {
//   console.log('valueOf调用了');
//   return this
// }
// Object.prototype.toString = function() {
//   console.log('toString被调用了');
//   return v.call(this)
// }
// console.log(num + '2');


// console.log(Object.prototype.toString.call(JSON));


function type(obj) {
  let classType = {}
    ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error'].forEach(item => {
      classType['[object ' + item + ']'] = item.toLowerCase()
    })
  if (obj == null) return String(obj) // 检测null和undefined [主要兼容拉票版本IE null和undefined被识别为[object Object]]
  return typeof obj === 'object' || typeof obj === 'function' ?
    classType[Object.prototype.toString.call(obj)] : typeof obj
}

function isPlainObject(obj) {
  // plainObject指的是通过对象字面量创建的或者直接new Object创建的对象，对象原型__proto__是Object.prototype

  // 特殊情况：把没有原型的对象也当作plainObject
  let classType = {}

  let toString = classType.toString // Object.prototype.toString()
  let hasOwn = classType.hasOwnProperty

  // 不是对象或者以及一些宿主对象（Array、Error、RedExp等）
  if (!obj || toString.call(obj) !== '[object Object]') return false

  // obj对象的原型
  let proto = Object.getPrototypeOf(obj)

  // 没有原型
  if (!proto) return true

  // 根据原型来推断constructor是否符合
  let Ctor = hasOwn.call(proto, 'constructor') && proto['constructor']

  return typeof Ctor === 'function' && hasOwn.toString.call(Ctor) === hasOwn.toString.call(Object)
}


// let a = new Object()
// let b = {}
// let c = Object.create(null)
// let d = Object.assign({}, {})
// console.log(isPlainObject(a));
// console.log(isPlainObject(b));
// console.log(isPlainObject(c));
// console.log(isPlainObject(d));