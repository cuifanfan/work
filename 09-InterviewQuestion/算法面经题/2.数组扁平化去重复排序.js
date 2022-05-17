// 1.使用新数组接收递归扁平化元素，然后使用希尔排序（局部有序）插入，同时去重
const arr = [
  [1, 2, 2],
  [3, 4, 5, 5],
  [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
];

// 1.递归+插入排序
function flatten(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] && typeof arr[i] === 'object') {
      // arr[i]是对象
      result.push(...flatten(arr[i]))
    } else {
      // arr[i]是基本数据类型

      // 去重
      if (!result.includes(arr[i])) {
        // 在这里进行插入排序
        let j = result.length - 1
        while (result[j] && result[j] > arr[i]) {
          result[j + 1] = result[j--]
        }
        result[j + 1] = arr[i]
      }
    }
  }
  return result
}

// console.log(flatten(arr));

// 2. 利用toString()
// console.log([...new Set(arr.toString().split(","))].sort((x, y) => x - y).map(i => Number(i)));

// 3.使用arr.flat(Infinity)
// console.log([...new Set(arr.flat(Infinity))].sort((x, y) => x - y));

// 4.使用reduce
// function flatten(arr) {
//   return arr.reduce((prev, curr) => {
//     return prev.concat(Array.isArray(curr) ? flatten(curr) : curr)
//   }, [])
// }
// console.log([...new Set(flatten(arr))].sort((x, y) => x - y));

// 5.使用concat
// function flatten(arr) {
//   while (arr.some(item => Array.isArray(item))) {
//     // 只要arr之中还有arr
//     arr = [].concat(...arr)
//   }
//   return arr
// }

// function shellSort(arr) {
//   let gap = Math.floor(arr.length / 2)
//   while (gap) {
//     for (let i = gap; i < arr.length; i += gap) {
//       let j = i - gap
//       let temp = arr[i]
//       while (arr[j] && arr[j] > temp) {
//         arr[j + gap] = arr[j]
//         j -= gap
//       }
//       arr[j + gap] = temp
//     }
//     gap = Math.floor(gap / 2)
//   }
//   return arr
// }
// let arr = [6, -1, 5, 2, -3, 9, -8, 7]
// console.log(shellSort(arr));