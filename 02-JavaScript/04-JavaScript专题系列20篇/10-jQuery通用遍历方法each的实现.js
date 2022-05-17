function type(obj) {
  let classType = {};
  ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error'].forEach(item => {
    classType['[object ' + item + ']'] = item.toLowerCase()
  })
  if (obj == null) return String(obj) // 检测null和undefined [主要兼容拉票版本IE null和undefined被识别为[object Object]]
  return typeof obj === 'object' || typeof obj === 'function' ?
    classType[Object.prototype.toString.call(obj)] : typeof obj
}



function isArrayLike(obj) {

  // obj 必须有 length属性
  var length = !!obj && "length" in obj && obj.length;
  var typeRes = type(obj);

  // 排除掉函数和 Window 对象
  if (typeRes === "function") {
    return false;
  }
  // if (typeRes === isWindow(obj)) {
  //   return false
  // }
  return typeRes === "array" || length === 0 ||
    typeof length === "number" && length > 0 && (length - 1) in obj;
}

function each(obj, callback) {

  if (isArrayLike(obj)) {
    // 如果对象是数组和类数组对象
    for (let i = 0, len = obj.length; i < len; i++) {
      // 让回调中的this指向当前的函数
      if (callback.call(obj[i], i, obj[i]) === false) break
    }
  } else {
    for (let i in obj) {
      if (callback.call(obj[i], i, obj[i]) === false) break
    }
  }
  return obj
}


each([0, 1, 2, 3, 4, 5], function(i, n) {
  if (i === 3) {
    return false
  }
  console.log(i, n);
})

each({
  uname: 'cuifan',
  age: 20
}, (key, value) => {
  console.log(key + ':' + value);
})