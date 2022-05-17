/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let length = nums.length
  let count = 0 // 记录数组中0元素的个数
  for (let i = 0; i < length; i++) {
    if (nums[i] === 0) {
      count++
    } else {
      nums.push(nums[i])
    }
  }
  for (let i = 0; i < length - count; i++) {
    nums[i] = nums[length + i]
  }

  for (let i = length - count; i < length; i++) {
    nums[i] = 0
  }
  nums.length = length
  console.log(nums);
};
moveZeroes([0, 0, 1])