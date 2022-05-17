// 1. 利用concat方法
// function flatten(arr) {
//   while (arr.some(item => Array.isArray(item))) arr = [].concat(...arr)
//   return arr
// }

// 2.使用arr.flat()
// let arr = [1, [2, [3, [4, 5]]], 6];
// console.log(arr.flat(Infinity));

// 3. 普通递归
// function flatten(arr) {
//   let result = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] instanceof Array) {
//       result.push(...flatten(arr[i]))
//     } else {
//       if (!!arr[i]) result.push(arr[i])
//     }
//   }
//   return result
// }

// 4.利用reduce函数
function flatten(arr) {
  return arr.reduce((prev, curr) => {
    if (!curr) return prev
    return prev.concat(Array.isArray(curr) ? flatten(curr) : curr)
  }, [])
}

// 5.使用toString方法
// let arr = [1, [2, [3, [4, 5]]], 6];
// console.log([...arr.toString().split(",").map(i => Number(i))]);

// 6.使用replace+JSON.parse   
// function flatten(arr) {
//   str = JSON.stringify(arr)
//   str = str.replace(/(\[|\])/g, "")
//   return JSON.parse('[' + str + ']')
// }


let arr = [1, [2, null, [3, undefined, [4, , 5]]], 6];
console.log(flatten(arr));
// console.log(arr.toString());