/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let n = nums.length
  let arr = []
  for (let i = 0; i < n; i++) {
    // 因为nums[i]都在[1,n],遍历nums数组，把每个元素的值当作下标（要-1），然后把对应位置的值恒置为负的相反数，
    // 再次遍历数组时、负数的值的下标+1就是已经在nums中出现过的数字了
    let index = Math.abs(nums[i]) // 取绝对值是因为前面的可能已经有值将该索引所在位置的值置为负了
    nums[index] = -Math.abs(nums[index]) // 这里取绝对值是因为该位置可能已经被取负，防止负负得正
  }


  return arr
};




console.log(findDisappearedNumbers(
  [4, 3, 2, 7, 8, 2, 3, 1]));