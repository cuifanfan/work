Array.prototype.myReduce = function(callback, initValue) {
  let arr = [...this]
  let result = initValue ? initValue : arr[0]
  let startIndex = initValue ? 0 : 1
  for (let i = startIndex; i < arr.length; i++) {
    result = callback(result, arr[i], i, this)
  }
  return result
}

let arr = [1]

let result = arr.myReduce((prev, curr) => {
  return curr + prev
})
console.log(result);