/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  // 用两个数组，分别记录从左到右和从右到左的乘积，索引和元素索引对应
  let length = nums.length
  let leftArray = [1]
  let totalRight = 1
  for (let i = 0; i < length - 1; i++) {
    leftArray[i + 1] = leftArray[i] * nums[i]
  }
  for (let i = length - 1; i >= 0; i--) {
    leftArray[i] = leftArray[i] * totalRight
    totalRight = nums[i] * totalRight
  }
  return leftArray
};