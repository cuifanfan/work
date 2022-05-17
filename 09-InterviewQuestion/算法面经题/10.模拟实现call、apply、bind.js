Function.prototype.myCall = function(context, ...args) {
  if (typeof this !== 'function') throw Error('not Function')

  // context为调整指向后的对象
  context = context || window

  // 让this指向context(让context调用该函数)
  let fn = Symbol('fn')
  context[fn] = this

  let result = context[fn](...args)
  delete context[fn]
  return result
}


Function.prototype.myApply = function(context, args) {
  if (typeof this !== 'function') throw Error('not Function')

  // context为新指向的对象
  context = context || window

  let fn = Symbol('fn')
  context[fn] = this

  let result = context[fn](...args)

  delete context[fn]
  return result
}

Function.prototype.myBind = function(context, ...args) {
  if (typeof this !== 'function') throw Error('not Function')

  let self = this

  let fbind = function() {
    if (this instanceof self) {
      // 当作构造函数调用，self指向构造函数
      self.apply(this, [...args, ...arguments])
    } else {
      // 当作普通函数调用
      self.apply(context, [...args, ...arguments])
    }
  }

  // 当当作构造函数调用的时候，保持原型链的完整性
  fbind.prototype = Object.create(self.prototype)
  return fbind
}


Function.prototype.myBind = function(context, ...args) {
  if (typeof this !== 'function') throw Error('Not Function')

  context = context || window
  let self = this // 记录原函数
  let fbound = function() {
    if (this instanceof fbound) {
      // 通过构造函数调用
      self.apply(this, [...args, ...arguments])
    } else {
      self.apply(context, [...args, ...arguments])
    }

  }
  fbound.prototype = Object.create(self.prototype)
  return fbound
}

let a = 2
let obj = {
  a: 1,
  getData(b, c, d) {
    console.log(this.a + b + c + d);
  }
}

let obj2 = {
  a: 666
}

// obj.getData.myCall(obj2, 3, 4, 5)
// obj.getData.myApply(obj2, [3, 4, 5])

let newFn = obj.getData.myBind(obj2)
newFn(3, 4, 5)