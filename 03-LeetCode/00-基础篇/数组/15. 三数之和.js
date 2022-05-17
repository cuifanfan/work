/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let len = nums.length
  let arr = []
  nums.sort((x, y) => x - y)
  for (let i = 0; i < len; i++) {

    // 肯定有一个数字小于等于0
    if (nums[i] > 0) break

    if (i > 0 && nums[i] === nums[i - 1]) continue

    let left = i + 1
    right = nums.length - 1

    while (left < right) {
      const sum = nums[left] + nums[right] + nums[i]
      if (sum === 0) {
        arr.push([nums[i], nums[left], nums[right]])

        // left右移值一样
        while (left < right && nums[left + 1] === nums[left]) {
          left++
        }

        // right左移值一样
        while (left < right && nums[right - 1] === nums[right]) {
          right--
        }

        right--
        left++
      } else if (sum > 0) {
        right--
      } else {
        left++
      }
    }

  }
  return arr
};