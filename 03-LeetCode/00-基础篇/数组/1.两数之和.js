// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {

//   let arr = []
//   for (let key in nums) {
//     arr[key] = [Number(key), nums[key]]
//   }
//   arr.sort((x, y) => x[1] - y[1])
//   const len = nums.length
//   let left = 0
//   let right = len - 1
//   while (left < right) {
//     const sum = arr[left][1] + arr[right][1]
//     if (sum === target) {
//       return [arr[left][0], arr[right][0]]
//     } else if (sum < target) {
//       left++
//     } else {
//       right--
//     }
//   }
//   return []
// };
// console.log(twoSum([2, 7, 11, 15], 9));


var twoSum = function(nums, target) {
  let len = nums.length
  let map = new Map()
  for (let i = 0; i < len; i++) {
    if (!map.has(target - nums[i])) {
      map.set(nums[i], i)
    } else {
      return [map.get(target - nums[i]), i]
    }
  };
}
console.log(twoSum([2, 7, 11, 15], 9));