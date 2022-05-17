// 请把两个数组['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 和['A', 'B', 'C', 'D']，
// 合并为['A1', 'A2', 'A', 'B1',
//   'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']。
const arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']
const arr2 = ['A', 'B', 'C', 'D']
const arr3 = arr1.concat(arr2)
arr3.forEach((item, index) => arr3[index] += 3)
arr3.sort()
arr3.forEach((item, index) => {
  arr3[index] = item.slice(0, item.length - 1)
})

console.log(arr3);