/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.delete(nums[i])
    } else {
      map.set(nums[i], 1)
    }
  }

  return
};

console.log(singleNumber([0, 2, 3, 2, 3]));