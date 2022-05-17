class MaxHeap {
  constructor() {
    this.array = []
  }

  // 插入元素
  insert(val) {
    // 采用的方法是空穴上滤，把新加进来的值逐次和父元素比较

    // 新插入的子元素的索引
    let i = this.array.length
      // 子元素父元素的索引
    let j = Math.floor(i / 2)
    while (i !== j && this.array[j] < val) {
      this.array[i] = this.array[j]
      i = j
      j = Math.floor(j / 2)
    }
    // this.array[j]>=val or i === j(到达了顶部)
    this.array[i] = val
    return this
  }

  // 删除元素
  delete() {
    // 空穴下滤, 删除根元素值，但是位置保留。删除尾部元素位置，但是值保留，然后根据这个值从根部一直往下比较，直到确定位置

    let lastItem = this.array.pop()
      // 如果只有一个元素
    if (!this.array.length) return lastItem

    let deleteItem = this.array[0]
    let i = 0
    let left = 2 * i + 1
    let right = 2 * i + 2
    this.array[i] = lastItem
    while (true) {
      console.log("i=" + i + ", left=" + left + ", right=" + right)
        // 有两个孩子并且两个孩子都比自己小
      if (right < this.array.length && lastItem >= this.array[left] && lastItem >= this.array[right]) break
        // 有一个左孩子并且比自己小

      if (right === this.array.length && lastItem >= this.array[left]) break
        // 没有左孩子

      if (right > this.array.length) break


      if (right === this.array.length) {
        // 如果没有右孩子 && 左孩子大于自己
        this.array[i] = this.array[left]
        i = left
      } else {
        // 俩孩子都有&&其中一个比自己大
        let index = this.array[left] >= this.array[right] ? left : right
        this.array[i] = this.array[index]
        i = index
      }
      left = 2 * i + 1
      right = 2 * i + 2
    }
    this.array[i] = lastItem
    return deleteItem
  }
}

let mh = new MaxHeap()
mh.insert(19).insert(18).insert(15).insert(16).insert(9).insert(12).insert(14)
console.log(mh.array)
console.log(mh.delete())
console.log(mh.array)