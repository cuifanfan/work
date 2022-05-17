// function shellSort(arr) {
//   let length = arr.length

//   // 确定增量
//   let gap = Math.floor(length / 2)

//   while (gap) {
//     for (let i = gap; i < length; i += gap) {
//       let j = i - gap // 记录有序部分最后一个元素索引
//       let temp = arr[i] // 开始排序的那一个项

//       while (arr[j] > temp && j >= 0) {
//         arr[j + gap] = arr[j]
//         j -= gap
//       }

//       arr[j + gap] = temp
//     }
//     gap = Math.floor(gap / 2)
//   }
//   return arr
// }


// function median(arr, left, right) {
//   let center = Math.floor((left + right) / 2)

//   if (arr[left] > arr[center]) {
//     [arr[left], arr[center]] = [arr[center], arr[left]]
//   }

//   if (arr[center] > arr[right]) {
//     [arr[center], arr[right]] = [arr[right], arr[center]]
//   }

//   if (arr[left] > arr[center]) {
//     [arr[left], arr[center]] = [arr[center], arr[left]]
//   }

//   [arr[right - 1], arr[center]] = [arr[center], arr[right - 1]]
//   return arr[right - 1]
// }

// function swap(arr, a, b) {
//   [arr[a], arr[b]] = [arr[b], arr[a]]
// }

// function quickSort(arr, left, right) {
//   if (left >= right) {
//     return arr
//   }

//   let privot = median(arr, left, right)

//   let i = left
//   let j = right - 1

//   while (true) {
//     while (arr[++i] < privot) {}
//     while (arr[--j] > privot) {}
//     if (i < j) {
//       swap(arr, i, j)
//     } else {
//       // i不可能等于j,此时i为左边序列第一个大于privot的值
//       break
//     }
//   }
//   swap(arr, i, right - 1)
//   arr = quickSort(arr, left, i - 1)
//   arr = quickSort(arr, i + 1, right)
//   return arr
// }

// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
// var findMedianSortedArrays = function(nums1, nums2) {
//   let newArr = nums1.concat(nums2)
//   console.log(newArr);
//   // newArr = shellSort(newArr);
//   newArr = quickSort(newArr, 0, newArr.length - 1)
//   console.log(newArr);
//   let index = (newArr.length - 1) / 2
//   if (index % 1) {
//     // index不是整数
//     return (newArr[Math.floor(index)] + newArr[Math.ceil(index)]) / 2
//   }
//   return newArr[index]
// };

// console.log(findMedianSortedArrays([1, 2], [3, 4]));



// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */

// function merge(nums1, m, nums2, n) {
//   let newArr = []
//   for (let i = 0; i < m; i++) {
//     newArr[i] = nums1[i]
//   }
//   let i = 0
//   let j = 0
//   let k = 0
//   while (k < m + n) {
//     if (newArr[i] !== undefined) {
//       if (nums2[j] !== undefined) {
//         // 两个都存在
//         if (newArr[i] > nums2[j]) {
//           nums1[k++] = nums2[j++]
//         } else {
//           nums1[k++] = newArr[i++]
//         }
//       } else {
//         // newArr[i]存在，nums2[j]不存在
//         while (i < m) nums1[k++] = newArr[i++]
//         break
//       }
//     } else {
//       while (j < n) nums1[k++] = nums2[j++]
//       break
//     }
//   }
// }

// var findMedianSortedArrays = function(nums1, nums2) {
//   let m = nums1.length
//   let n = nums2.length
//     // 合并两个数组，时间复杂度为O(N)
//   merge(nums1, m, nums2, n)

//   if ((m + n) % 2) {
//     // m+n 为奇数
//     return nums1[(m + n - 1) / 2]
//   } else {
//     // m+n为偶数
//     let index1 = Math.floor((m + n - 1) / 2)
//     let index2 = Math.ceil((m + n - 1) / 2)
//     return (nums1[index1] + nums1[index2]) / 2
//   }
// };

// console.log(findMedianSortedArrays([1, 2], [3, 4]));