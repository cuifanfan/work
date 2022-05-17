function unique2(array) {
  let arr = []
  for (let i = 0, arrayLength = array.length; i < arrayLength; i++) {
    // for (var j = 0, arrLen = arr.length; j < arrLen; j++) {
    //   if (array[i] === arr[j]) break
    // }
    // if (j === arrLen) arr.push(array[i])

    let current = array[i]
    if (arr.indexOf(current) === -1) arr.push(current)
  }
  return arr
}

// 排序后去重
function unique1(array) {
  let res = []
  let sortedArray = array.sort((x, y) => x - y)
  for (let i = 0, len = sortedArray.length; i < len; i++) {
    if (!i || array[i] != array[i - 1]) res.push(sortedArray[i])
  }
  return res
}

function unique(array, isSorted, handle) {
  let res = []
  let seen = []
  for (let i = 0, len = array.length; i < len; i++) {
    let value = array[i]
    let computed = handle ? handle(value, i, array) : value
    if (isSorted) {
      if (!i || value !== previous) {
        if (typeof value === 'string') {
          if (seen.indexOf(computed) === -1) seen.push(computed)
          else continue
        }
        res.push(value)
      }
      previous = value
    } else if (seen.indexOf(computed) === -1) {
      res.push(value)
      seen.push(computed)
    }
  }
  return res
}

// 利用filter
function unique(array) {
  return array.filter((item, index) => {
    return array.indexOf(item) === index
  })
}

// 利用filter排序去重
function uniqueF(array) {
  return array.filter((item, index) => {
    return index ? item !== array[index - 1] : !index
  })
}

// 利用filter和对象键值对去重(不能用于正则，JSON.stringify对每个正则返回都是{})
function uniqueO(array) {
  let obj = {}
  return array.filter((item) => {
    return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : obj[typeof item + JSON.stringify(item)] = true
  })
}

// 使用set
function uniqueS(array) {
  // return Array.from(new Set(array))
  return [...new Set(array)]
}

var uniqueS = a => [...new Set(a)]

// 使用map
function uniqueM(array) {
  let m = new Map()
  return array.filter(item => !m.has(item) && m.set(item, 1))
}

console.log(uniqueM([1, 2, 1, 2, 3]));
// let arr = [1, 2, 5, 6, 2, 4, 1, 'a', 2, 3, 8, 3, 6, 3, 5, 'A', 'a', 'b', 'c', 'd', 'c', 'g', 'C']

// let arr1 = [1, 2, 3, 4, 4, 5, 5, 6, 7, 'a', 'b', 'b', 'c', 'A', 'B', 'C', 'C']

// console.log(unique(arr, false, (item) => {
//   return typeof item === 'string' ? item.toUpperCase() : item
// }));

// console.log(unique(arr1, true, (item) => {
//   return typeof item === 'string' ? item.toUpperCase() : item
// }));

// console.log(uniqueF([1, 2, 3, 4, 4, 5, 6, 6, 7]));