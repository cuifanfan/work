function dichotomiaIndex(arr, target) {
  // 如果数组中有target,返回找到的target下标（如果有多个target,返回的只是其中某个target的下标，具体哪个下标无法确定）

  // 如果数组中没有该值，就返回比该值大的那个最小的元素的下标
  let left = 0
  let right = arr.length - 1
  let mid = Math.floor((left + right) / 2)

  while (left <= right) {
    if (arr[mid] < target) {
      left = mid + 1
    } else if (arr[mid] > target) {
      right = mid - 1
    } else {
      return mid
    }
    mid = Math.floor((left + right) / 2)
  }
  return left
}