/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
  // 题目分析：滑动窗口法
  // 记录k个数字的和，然后减去第一个数字，加上最后一个数字就滑动到了下一个窗口
  let sum = 0 // 记录开始k个数字的和
  let count = 0 // 记录满足条件的子数组的数目
  let targetSum = k * threshold
  for (let i = 0; i < k; i++) {
    sum += arr[i]
  }

  if (sum >= targetSum) {
    count++
  }

  for (let j = k; j < arr.length; j++) {
    sum = sum + arr[k] - arr[j - k]
    if (sum >= targetSum) count++
  }
  return count
};

let arr = [2, 2, 2, 2, 5, 5, 5, 8]
let k = 3
let threshold = 4
console.log(numOfSubarrays(arr, k, threshold));