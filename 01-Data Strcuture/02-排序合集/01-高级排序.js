function shellSort(arr) {
  let length = arr.length
    // 确定增量
  let gap = Math.floor(length / 2)
  while (gap) {
    for (let i = gap; i < length; i += gap) {
      let j = i - gap // 记录有序部分最后一个元素索引
      let temp = arr[i] // 开始排序的那一个项
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



function median(arr, left, right) {
  let center = Math.floor((left + right) / 2)
  if (arr[left] > arr[center]) swap(arr, left, center)
  if (arr[center] > arr[right]) swap(arr, center, right)
  if (arr[left] > arr[center]) swap(arr, left, center)
  swap(arr, center, right - 1)
  return arr[right - 1]
}

function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]]
}

function quickSort(arr, left, right) {
  if (left >= right) return arr

  let privot = median(arr, left, right)
  let i = left
  let j = right - 1
  while (i < j) {
    while (arr[++i] < privot) {}
    while (arr[--j] > privot) {}
    if (i < j) swap(arr, i, j)
    else {
      swap(arr, i, right - 1)
      break
    }
  }
  arr = quickSort(arr, left, i - 1)
  arr = quickSort(arr, i + 1, right)
  return arr
}

let arr = [2, 1, 9, 6, 7, 5, 8, 4, 3]

arr = quickSort(arr, 1, arr.length - 1)
console.log(arr);