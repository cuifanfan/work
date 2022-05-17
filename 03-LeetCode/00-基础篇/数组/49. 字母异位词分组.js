// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */
// var groupAnagrams = function(strs) {
//   let len = strs.length
//   let map = new Map()
//   let targetArr = []
//   for (let i = 0; i < len; i++) {
//     let item = strs[i].split("").sort().join("")
//     if (map.has(item)) {
//       map.get(item).push(strs[i])
//     } else {
//       map.set(item, [strs[i]])
//     }
//   }

//   console.log(map.values());
//   return targetArr
// };


// var groupAnagrams = function(strs) {
//   let arr = []
//   let strscopy = JSON.parse(JSON.stringify(strs))
//   strscopy.forEach((item, index, arr) => {
//     arr[index] = item.split('').sort().join('')
//   })
//   const deWeightArr = [...new Set(strscopy)]
//   let n = deWeightArr.length;
//   let mymap = new Map()
//   for (let i = 0; i < n; i++) {
//     mymap.set(deWeightArr[i], i)
//     arr.push([])
//   }
//   for (let i = 0; i < strs.length; i++) {
//     let item = strs[i].split('').sort().join('')
//     arr[mymap.get(item)].push(strs[i])
//   }
//   return arr
// };

// groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])



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

//   while (i < j) {
//     while (arr[++i] < privot) {}
//     while (arr[--j] >= privot) {}
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

// var groupAnagrams = function(strs) {
//   let len = strs.length
//   let map = new Map()
//   for (let i = 0; i < len; i++) {
//     // 把字符串拆成数组、再排序、再合并（n+n+n）
//     let item = strs[i].split("")
//     item = quickSort(item, 0, item.length - 1)
//     if (map.has(item)) {
//       map.get(item).push(strs[i])
//     } else {
//       map.set(item, [strs[i]])
//     }
//   }
//   return [...map.values()]
// };


var groupAnagrams = function(strs) {
  let len = strs.length
  let map = new Map()
    // 时间复杂度：n*(m+m+m)
  for (let i = 0; i < len; i++) {
    // 把字符串拆成数组、再排序、再合并（n+n+n）
    let key = new Array(26).fill(0)
    for (let char of strs[i]) {
      key[char.charCodeAt() - 97]++
    }
    key = JSON.stringify(key)
    if (map.has(key)) {
      map.get(key).push(strs[i])
    } else {
      map.set(key, [strs[i]])
    }
  }
  return [...map.values()]

};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));