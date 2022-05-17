// 数组的扁平化就是将一个嵌套多层的数组array转换为只有一层的数组
let arr = [1, [2, [3, [4, 5]]], 6, [7, 8], 9]

// 1.循环递归
// function flatten(arr) {
//   let result = []
//   for (let i = 0, len = arr.length; i < len; i++) {
//     if (typeof arr[i] === 'object') {
//       result.push(...flatten(arr[i]))
//     } else {
//       result.push(arr[i])
//     }
//   }
//   return result
// }

// console.log(flatten(arr));

// 2.利用toString
// console.log(arr.toString().split(',').map(item => Number(item)));

// 3.利用reduce
// function flatten(arr) {
//   return arr.reduce((prev, curr) => {
//     return prev.concat(Array.isArray(curr) ? flatten(curr) : curr)
//   }, [])
// }

// 4.利用concat结构
// function flatten(arr) {
//   while (arr.some(item => Array.isArray(item))) {
//     arr = [].concat(...arr)
//   }
//   return arr
// }
// console.log(flatten(arr));

/**
 * 数组扁平化
 * @param  {Array} input   要处理的数组
 * @param  {boolean} shallow 是否只扁平一层
 * @param  {boolean} strict  是否严格处理元素，下面有解释
 * @param  {Array} output  这是为了方便递归而传递的参数
 * 源码地址：https://github.com/jashkenas/underscore/blob/master/underscore.js#L528
 */
function flatten(input, shallow, strict, output) {
  output = output || []
  for (let i = 0, len = input.length; i < len; i++) {
    if (Array.isArray(input[i])) {
      // 如果只扁平一层
      if (shallow) {
        for (let j = 0, length = input[i].length; j < length; j++) {
          output[output.length++] = input[i][j]
        }
      } else {
        // 全部扁平化
        flatten(input[i], shallow, strict, output)
      }
    } else if (!strict) {
      // 如果当前值不为数组且不需要严格处理、就把其加入output
      output[output.length++] = input[i]
    }
  }
  return output
}

// shallow:true,strict:true => 筛选掉所有不是数组的元素
// shallow:true,strict:false => 只扁平化一层
// shallow:false,strict:false => 全部扁平化
// shallow:false,strict:true => 返回一个[]


function unique(array) {
  return Array.from(new Set(array))
}
let _ = {}

_.union = function() {
  return unique(flatten(arguments, true, true))
}

_.difference = function(array, ...rest) {
  rest = flatten(rest, true, true)
  return array.filter(item => rest.indexOf(item) === -1)

}

// console.log(_.union([1, 2, 3], [101, 2, 1], 99, 88, [3, 101]));
console.log(_.difference([1, 2, 3, 4, 5], [5, 2, 9], 3, [1, 8]));