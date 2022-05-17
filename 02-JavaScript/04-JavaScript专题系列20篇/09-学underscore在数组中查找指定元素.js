function findIndex(array, callback, context) {
  for (let i = 0, len = array.length; i < len; i++) {
    if (callback.call(context, array[i], i, array)) return i
  }
  return -1
}


function findLastIndex(array, callback, context) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (callback.call(context, array[i], i, array)) return i
  }
  return -1
}

// function createIndexFinder(dir) {
//   return function(array, callback, context) {
//     let len = array.length
//     let i = dir > 0 ? 0 : len - 1

//     for (; i < len && i >= 0; i += dir) {
//       if (callback.call(context, array[i], i, array)) return i
//     }
//     return -1
//   }
// }

// function sortedIndex(array, num) {
//   let left = 0
//   let right = array.length


//   while (left < right) {
//     let mid = Math.floor((left + right) / 2)
//     if (num > array[mid]) {
//       left = mid
//     } else {
//       right = mid
//     }
//   }
//   return right
// }

function sortedIndex(array, obj, callback) {
  let left = 0
  let right = array.length
  while (left < right) {

    let mid = Math.floor((left + right) / 2)
    if (callback(obj) > callback(array[mid])) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return right
}


// let findIndex = createIndexFinder(1)
// let findLastIndex = createIndexFinder(-1)

// console.log(findIndex([1, 2, 3, 4, 5, 6, 7], item => item > 3));
// console.log(findLastIndex([1, 2, 3, 4, 5, 6, 7], item => item > 3));

// var stooges = [{
//   name: 'stooge1',
//   age: 10
// }, {
//   name: 'stooge2',
//   age: 30
// }];

// let result = sortedIndex(stooges, {
//   name: 'stooge3',
//   age: 20
// }, stooge => stooge.age)
// console.log(result);

function createIndexOfFinder(dir, callback) {
  return function(array, item, index) {
    let len = array.length
    let i = 0
    if (typeof index === 'number') {
      if (dir > 0) {
        // 如果是正数、就从该数字开始。如果是负数、就加上数组的长度在开始查找。如果加上之后仍然是负数，就从第一个开始
        i = index >= 0 ? index : Math.max(len + index, 0)
      } else {
        // 如果是整数：大于数组长度就让它从末尾开始、否则就从指定位置
        // 如果是负数: 就让数组长度 + 负值开始查找
        i = index >= 0 ? Math.min(index, len - 1) : index + len - 1
      }
    } else if (sortedIndex && index && len) {
      // index不是数字,是true的时候表明数组是已排序好的
      index = sortedIndex(array, item)
      return array[index] === index ? index : -1
    }

    // 判断元素是不是NaN
    if (item !== item) {
      // 在满足条件的截取的数组中查找第一个满足isNaN的元素的下标
      index = callback(array.slice(i, len), isNaN)
      return index >= 0 ? i + index : -1
    }

    for (; i < len - 1 && i >= 0; i += dir) {
      if (array[index] === item) return i
    }
    return -1
  }
}


let indexOf = createIndexOfFinder(1, findIndex)
let lastIndexOf = createIndexOfFinder(-1, findLastIndex)