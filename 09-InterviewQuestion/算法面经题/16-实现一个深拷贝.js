// JSON.parse和JSON.stringify() 足够覆盖多数场景， 但是循环引用， 一些常见对象。 比如RegExp、 Date、 Set、 Map等无法拷贝。同时无法拷贝函数

function deepCopy(obj) {
  if (typeof obj !== 'object' || !obj) return
  let newObj = obj instanceof Array ? [] : {}
  for (let key of Object.keys(obj)) {
    newObj[key] = typeof obj[key] !== 'object' ? obj[key] : deepCopy(obj[key])
  }
  return newObj
}

let obj = {
  a: 1,
  b: {
    c: 2
  }
}

let obj2 = deepCopy(obj)
obj2.b.c = 323
console.log(obj.b.c);