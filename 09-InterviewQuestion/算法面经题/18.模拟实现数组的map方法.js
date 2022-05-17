Array.prototype.myMap = function(callback, context) {
  let result = []
  for (let i = 0; i < this.length; i++) {
    result.push(callback.call(context, this[i], i, this))
  }
  return result
}

let arr = [1, 2, 3, 4]
let arr1 = arr.myMap(i => i + 5)
console.log(arr1);