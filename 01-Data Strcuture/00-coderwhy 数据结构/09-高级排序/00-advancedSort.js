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

  if (arr[left] > arr[center]) {
    [arr[left], arr[center]] = [arr[center], arr[left]]
  }

  if (arr[center] > arr[right]) {
    [arr[center], arr[right]] = [arr[right], arr[center]]
  }

  if (arr[left] > arr[center]) {
    [arr[left], arr[center]] = [arr[center], arr[left]]
  }

  [arr[right - 1], arr[center]] = [arr[center], arr[right - 1]]
  return arr[right - 1]
}

function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]]
}

function quickSort(arr, left, right) {
  if (left >= right) {
    return arr
  }

  let privot = median(arr, left, right)

  let i = left
  let j = right - 1

  while (i < j) {
    while (arr[++i] < privot) {}
    while (arr[--j] >= privot) {}
    if (i < j) {
      swap(arr, i, j)
    } else {
      // i不可能等于j,此时i为左边序列第一个大于privot的值
      break
    }
  }
  swap(arr, i, right - 1)
  arr = quickSort(arr, left, i - 1)
  arr = quickSort(arr, i + 1, right)
  return arr
}