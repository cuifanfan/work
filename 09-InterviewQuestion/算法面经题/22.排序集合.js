function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]]
}

function median(arr, left, right) {
  let center = Math.floor((left + right) / 2)
  if (arr[left] > arr[center]) swap(arr, left, center)
  if (arr[center] > arr[right]) swap(arr, center, right)
  if (arr[left] > arr[center]) swap(arr, left, center)
  swap(center, right - 1)
  return arr[right - 1]
}

// 冒泡排序
Array.prototype.bubbleSort = function() {
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j)
      }
    }
  }
}

// 时间复杂度：O(N²) 循环比较(N-1)+(N-2)+...+2+1 = (N-1)N/2次，交换(N-1)N/4次
// 改进：减少比较次数 => 选择排序
Array.prototype.selectSort = function() {
  for (let i = 0; i < this.length; i++) {
    let min = i
    for (let j = i + 1; j < this.length; j++) {
      if (arr[min] > arr[j]) min = j
    }
    swap(arr, i, min)
  }
}

// 时间复杂度：O(N²) 循环(N-1)N/2次，交换O(N)次

Array.prototype.insertSort = function() {
  // 认为局部有序
  for (let i = 0; i < this.length; i++) {
    let j = i - 1 // j和j以前的都是有序的
    let temp = this[i] // 记录当前要排序的值
    while (this[j] && this[j] > temp) {
      this[j + 1] = this[j--]
    }
    this[j + 1] = temp
  }
}

// 以上是简单排序，简单排序的空间复杂度都是O(1)
// 时间复杂度：无序情况下是O(N²)，局部有序的情况下小于O(N²)
// 改进：不一个个往前比较，选取合适的增量比较

Array.prototype.shellSort = function() {
  let gap = Math.floor(this.length / 2)

  while (gap) {
    for (let i = gap; i < this.length; i += gap) {
      let j = i - gap
      let temp = this[i]
      while (this[j] && this[j] > temp) {
        this[j + gap] = this[j]
        j -= gap
      }
      this[j + gap] = temp
    }
    gap = Math.floor(gap / 2)
  }
}

// 时间复杂度：平均时间复杂度O(nlog(n))，不稳定，空间复杂度O(1)

Array.prototype.quickSort = function(left, right) {
  // 递归出口
  if (left >= right) return

  // 获得中继
  const privot = median(this, left, right)
  let i = left
  let j = right - 1
  while (i < j) {
    while (this[++i] < privot) {}
    while (this[--j] > privot) {}
    if (i < j) swap(this, i, j)
    else {
      swap(this, i, right - 1)
      break
    }
  }
  // 递归排序左边
  this.quickSort(left, i - 1)

  // 递归排序右边
  this.quickSort(i + 1, right)
}

// 时间复杂度平均为O(nlog(n)),空间复杂度O(log(n))

function merge(arr1, arr2) {
  // 合并两个有序数组
  let i = 0
  let j = 0
  let result = []
  while (true) {
    if (i === arr1.length) {
      result.push(...arr2.slice(j))
      break
    }

    if (j === arr2.length) {
      result.push(...arr1.slice(i))
      break
    }

    if (arr1[i] > arr2[j]) {
      result.push(arr2[j++])
    } else {
      result.push(arr1[i++])
    }
  }
  return result
}

Array.prototype.mergeSort = function() {
  if (this.length <= 1) return this
  let center = Math.floor(this.length / 2)

  let leftArr = this.slice(0, center)
  let rightArr = this.slice(center)
  return merge(leftArr.mergeSort(), rightArr.mergeSort())
}

Array.prototype.heapSort = function() {

}

// 时间复杂度O(nlog(n))，空间复杂度O(n),稳定
let arr = [6, 5, 8, 2, 7, 9, 6, 3]

// arr.bubbleSort()
// arr.selectSort()
// arr.insertSort()
// arr.shellSort()
// arr.quickSort(0, arr.length - 1)
arr = arr.mergeSort()
console.log(arr);