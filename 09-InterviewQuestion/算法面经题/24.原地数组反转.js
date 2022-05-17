Array.prototype.myReverse = function() {
  // let stack = []
  // for (let i = 0; i < this.length; i++) {
  //   stack.push(this[i])
  // }

  // for (let i = 0; i < this.length; i++) {
  //   this[i] = stack.pop()
  // }
  // return this
  let i = 0
  let j = this.length - 1
  while (i < j) {
    [this[i], this[j]] = [this[j], this[i]]
    i++
    j--
  }
  return this
}

let arr = [1, 2, 3, 4]
console.log(arr.myReverse());