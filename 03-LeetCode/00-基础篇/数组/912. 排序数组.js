/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 希尔排序和快速排序
function swap(arr, left, right) {
  [arr[left], arr[right]] = [arr[right], arr[left]]
}

function median(arr, left, right) {
  let center = Math.floor((left + right) / 2)
  if (arr[left] > arr[center]) swap(arr, left, center)
  if (arr[center] > arr[right]) swap(arr, center, right)
  if (arr[left] > arr[center]) swap(arr, left, center)
  swap(arr, center, right - 1)
  return arr[right - 1]
}

function quickSort(arr, left, right) {
  if (left >= right) return arr

  // 获得中枢
  let privot = median(arr, left, right)

  let i = left
  let j = right - 1
  while (i < j) {
    while (arr[++i] < privot) {}
    while (arr[--j] > privot) {}
    if (i < j) swap(arr, i, j)
    else {
      swap(arr, i, right - 1)
      break
    }
  }
  arr = quickSort(arr, left, i - 1)
  arr = quickSort(arr, i + 1, right)
  return arr
}



var sortArray = function(nums) {
  return quickSort(nums, 0, nums.length - 1)
};