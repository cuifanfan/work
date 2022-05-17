var foo = {
  value: 'foo'
}
var value = 'window'

function bar(uname, age) {
  this.size = 'cuifan'
  console.log(this.value);
  console.log(uname);
  console.log(age);
}

Function.prototype.myBind = function(context, ...params) {
  // 判断调用bind的是否为函数
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }
  let self = this
  let fbind = function(...newParams) {
    // 普通函数调用，指向context
    // 当构造函数调用，指向新创建的对象
    self.apply(this instanceof self ? this : context, params.concat(newParams))
  }

  // 为了避免fbind修改原型对象会影响到bar的原型对象
  fbind.prototype = Object.create(self.prototype)
  return fbind
}