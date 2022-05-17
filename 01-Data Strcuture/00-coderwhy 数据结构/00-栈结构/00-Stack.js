class Stack {
  constructor() {
    this.items = []
  }

  // 1. 添加一个新的元素到栈顶
  push(element) {
    this.items[this.items.length] = element
  }

  // 2.移除栈顶的元素
  pop() {
    let temp = this.items[this.items.length - 1]
    this.items.length--
      return temp
  }

  // 3. 查看栈顶的元素
  peek() {
    return this.items[this.items.length - 1]
  }

  // 4. 查看栈是否为空
  isEmpty() {
    return this.items.length <= 0
  }

  // 5.获取栈中元素的个数
  size() {
    return this.items.length
  }
}

module.exports = Stack