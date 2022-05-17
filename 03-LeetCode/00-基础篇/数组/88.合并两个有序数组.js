// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
// var merge = function(nums1, m, nums2, n) {

//   // 把nums2中的元素加入到nums1中
//   for (let i = 0; i < n; i++) {
//     nums1[m + i] = nums2[i]
//   }

//   // 选取增量
//   let gap = m
//   while (gap > 0) {
//     for (let i = gap; i < m + n; i += gap) {
//       let j = i - gap;
//       let temp = nums1[i]
//       while (nums1[j] > temp && j >= 0) {
//         nums1[j + gap] = nums1[j]
//         j -= gap
//       }
//       nums1[j + gap] = temp
//     }

//     gap = Math.floor(gap / 2)
//   }

// };

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));


// function swap(arr, a, b) {
//   [arr[a], arr[b]] = [arr[b], arr[a]]
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

// function quickSort(arr, left, right) {
//   // 递归结束条件
//   if (left >= right) return arr
//   let privot = median(arr, left, right)

//   let i = left
//   let j = right - 1
//   while (i < j) {
//     while (arr[++i] < privot) {}
//     while (arr[--j] >= privot) {}

//     if (i < j) swap(arr, i, j)
//     else break
//   }
//   swap(arr, i, right - 1)
//   arr = quickSort(arr, left, i - 1)
//   arr = quickSort(arr, i + 1, right)
//   return arr
// }



// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
// var merge = function(nums1, m, nums2, n) {

//   // 把nums2中的元素加入到nums1中
//   for (let i = 0; i < n; i++) {
//     nums1[m + i] = nums2[i]
//   }

//   // 快速排序
//   nums1 = quickSort(nums1, 0, m + n - 1)
//   console.log(nums1);
// };




function binarySearchIndex(arr, len, target) {
  let left = 0
  let right = len - 1
  let mid = Math.floor((left + right) / 2)
  while (left <= right) {
    if (arr[mid] > target) {
      right = mid - 1
    } else if (arr[mid] < target) {
      left = mid + 1
    } else {
      let temp = arr[mid]
      while (++mid < len && arr[mid] === temp) {}
      return mid
    }
    mid = Math.floor((left + right) / 2)
  }
  return mid + 1
}


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

  // let mapIndex = new Map()

  // for (let i = 0; i < n; i++) {
  //   // 把nums2中的元素加入到nums1中
  //   nums1[m + i] = nums2[i]

  //   // mapIndex中存储的是nums2元素应该在nums1中的索引、值的键值对
  //   let index = binarySearchIndex(nums1, m, nums2[i])
  //   mapIndex.set(index + i, nums2[i])
  // }

  // // 把nums1复制一份
  // let newArr = []
  // for (let i = 0; i < m; i++) {
  //   newArr[i] = nums1[i]
  // }

  // let j = 0 // 记录newArr中的索引
  // for (let i = 0; i < m + n; i++) {
  //   if (mapIndex.has(i)) {
  //     nums1[i] = mapIndex.get(i)
  //   } else {
  //     nums1[i] = newArr[j++]
  //   }
  // }
};

// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
// merge([1], 1, [], 0)
// merge([0], 0, [1], 1)

function big(a, b) {
  return a > b ? a : b
}

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let newArr = []
  for (let i = 0; i < m; i++) {
    newArr[i] = nums1[i]
  }
  let i = 0
  let j = 0
  let k = 0
  while (k < m + n) {
    if (newArr[i] !== undefined) {
      if (nums2[j] !== undefined) {
        // 两个都存在
        if (newArr[i] > nums2[j]) {
          nums1[k++] = nums2[j++]
        } else {
          nums1[k++] = newArr[i++]
        }
      } else {
        // newArr[i]存在，nums2[j]不存在
        while (i < m) nums1[k++] = newArr[i++]
        break
      }
    } else {
      while (j < n) nums1[k++] = nums2[j++]
      break
    }
  }
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
merge([1], 1, [], 0)
merge([0], 0, [1], 1)
merge([-1, 0, 1, 1, 0, 0, 0, 0, 0],
  4, [-1, 0, 2, 2, 3],
  5)