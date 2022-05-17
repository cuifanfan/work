// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// function swap(arr, a, b) {
//   [arr[a], arr[b]] = [arr[b], arr[a]]
// }

// function median(arr, left, right) {
//   let center = Math.floor((left + right) / 2)
//   if (arr[left] > arr[center]) swap(arr, left, center)
//   if (arr[center] > arr[right]) swap(arr, center, right)
//   if (arr[left] > arr[center]) swap(arr, left, center)
//   swap(arr, center, right - 1)
//   return arr[right - 1]
// }

// function quickSort(arr, left, right) {
//   if (left >= right) return arr
//   let privot = median(arr, left, right)

//   let i = left
//   let j = right - 1

//   while (i < j) {
//     while (arr[++i] < privot) {}
//     while (arr[--j] > privot) {}
//     if (i < j) {
//       swap(arr, i, j)
//     } else break
//   }
//   swap(arr, i, right - 1)
//   arr = quickSort(arr, left, i - 1)
//   arr = quickSort(arr, i + 1, right)
//   return arr
// }

function shellSort(arr) {
  let length = arr.length

  // 选择增量
  let gap = Math.floor(length / 2)
  while (gap > 0) {
    for (let i = gap; i < length; i += gap) {
      let j = i - gap;
      let temp = arr[i]
      while (arr[j] > temp && j >= 0) {
        arr[j + gap] = arr[j]
        j -= gap
      }
      arr[j + gap] = temp
    }
    gap = Math.floor(gap / 2)
  }
  return arr
}

// var sortColors = function(nums) {
//   return shellSort(nums)
// };
function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]]
}
var sortColors = function(nums) {
  let left = 0,
    right = nums.length - 1,
    current = 0
  while (current <= right) {
    if (nums[current] === 0) {
      swap(nums, current, left)
      current++
      left++
    } else if (nums[current] === 2) {
      swap(nums, current, right--)
    } else {
      current++
    }
  }
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));