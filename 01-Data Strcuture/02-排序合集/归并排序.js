function Merge(arr1, arr2) {
  // 合并两个有序数组
  let n = arr1.length
  let m = arr2.length
  let i = 0,
    j = 0
  let arr3 = []
  while (true) {
    if (i >= n) {
      arr3.push(...arr2.slice(j))
      break
    }
    if (j >= m) {
      arr3.push(...arr1.slice(i))
      break
    }
    if (arr1[i] > arr2[j]) {
      arr3.push(arr2[j++])
    } else {
      arr3.push(arr1[i++])
    }
  }
  return arr3
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let leftArray = arr.slice(0, mid)
  let rightArray = arr.slice(mid)
  return Merge(mergeSort(leftArray), mergeSort(rightArray))
}

console.log(mergeSort([9, 8, 7, 6, 8, 5, 9, 10, 2, 3]));