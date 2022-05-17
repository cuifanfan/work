function myInstanceof(obj, constructor) {
  // 右边constructor.prototype是否在左边的原型链上
  let currentProto = obj.__proto__
  while (currentProto) {
    if (currentProto === constructor.prototype) return true
    currentProto = currentProto.__proto__
  }
  return false
}

let a = []
console.log(myInstanceof(a, Array));