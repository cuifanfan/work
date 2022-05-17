/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  let mid = Math.floor((left + right) / 2)
  while (left <= right) {
    if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      let indexLeft = mid
      let indexRight = mid
      while (nums[--indexLeft] === nums[mid]) {}
      while (nums[++indexRight] === nums[mid]) {}
      return [indexLeft + 1, indexRight - 1]
    }
    mid = Math.floor((left + right) / 2)
  }
  return [-1, -1]
};