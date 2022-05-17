// 数组的浅拷贝(可以利用slice、concat来实现拷贝)
let arr = [undefined, null, true, 1, 'old']

let newArr = arr.concat()
let newArr1 = arr.slice();

// 深拷贝
let newArr2 = JSON.parse(JSON.stringify(arr))

var shallowCopy = function(obj) {
  if (typeof obj !== 'object') return
  let newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) newObj[key] = obj[key]
  }
  return newObj
}

var deepCopy = function(obj) {
  if (typeof obj !== 'object') return
  var newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }
  return newObj
}