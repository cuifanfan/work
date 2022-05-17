/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]]
}

function dichotomiaIndex(arr, target, left) {
  // 如果数组中有target,返回找到的target下标（如果有多个target,返回的只是其中某个target的下标，具体哪个下标无法确定）

  // 如果数组中没有该值，就返回比该值大的那个最小的元素的下标
  let right = arr.length - 1
  let mid = Math.floor((left + right) / 2)
  while (left <= right) {
    if (arr[mid] < target) {
      right = mid - 1
    } else if (arr[mid] > target) {
      left = mid + 1
    } else {
      // 找到的元素如果有多个、返回最后一个的索引
      while (arr[mid] === target) {
        mid--
      }
      return mid
    }
    mid = Math.floor((left + right) / 2)
  }
  return right
}

var nextPermutation = function(nums) {
  let length = nums.length - 1

  // index为从数组末尾开始的第一个满足nums[index]>nums[index-1]的索引
  let index = 0
  for (let i = length; i >= 0; i--) {
    if (nums[i] > nums[i - 1]) {
      index = i
      break
    }
  }

  if (index === 0) {
    // 当前数组为降序有序数组
    nums.reverse()
  } else {
    // 二分法找到一个比当前arr[index-1]大的最小的值，然后交换二者
    let index1 = dichotomiaIndex(nums, nums[index - 1], index);
    swap(nums, index1, index - 1)

    // 然后把index到length-1部分反转
    let i = index
    let j = length
    while (i < j) {
      swap(nums, i++, j--)
    }
  }
};