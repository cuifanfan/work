function _new(fn, ...args) {
  // 在堆中分配内存，（新生/老生区）
  let obj = {}

  // 把对象的[[prototype]]特性指向函数的原型对象
  // Object.setPrototypeOf(obj, fn.prototype) // 用这个可能有性能问题
  obj.__proto__ = Object.create(fn.prototype)

  // 把this指向该对象，并调用构造函数内部代码
  let result = fn.apply(this, args)

  return typeof result === 'object' ? result : obj
}