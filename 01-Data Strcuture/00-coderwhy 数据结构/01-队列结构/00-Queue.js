class Queue {
  constructor() {
    this.items = []
  }

  // 1.在队列末尾添加新的值
  enqueue(element) {
    this.items[this.items.length] = element
  }

  // 2.元素出列
  dequeue() {
    let temp = this.items[0]
    this.items.forEach((item, index, array) => {
      array[index] = array[index + 1]
    })
    this.items.length--
      return temp
  }

  // 3.查看前端的元素
  front() {
    return this.items[0]
  }

  // 4.查看队列是否为空
  isEmpty() {
    return this.items.length <= 0
  }

  // 5.查看队列中元素的个数
  size() {
    return this.items.length
  }

}

module.exports = Queue