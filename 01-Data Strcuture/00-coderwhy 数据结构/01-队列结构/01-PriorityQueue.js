class QueueElement {
  // 用于保存队列中元素的值和优先级
  constructor(element, priority) {
    this.element = element
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.items = []
  }

  // 1.向队列中添加新的元素
  enqueue(element, priority) {
    // 判断是否为第一个元素
    let queueElement = new QueueElement(element, priority)
    if (this.isEmpty()) {
      this.items[0] = queueElement
    } else {
      for (let i = 0; i < this.items.length; i++) {
        if (queueElement.priority > this.items[i].priority) {
          for (let j = this.items.length; j >= i + 1; j--) {
            this.items[j] = this.items[j - 1]
          }
          return this.items[i] = queueElement
        }
      }
      this.items[this.items.length] = queueElement
    }
  }

  // 2.弹出队列中的元素
  dequeue() {
    let temp = this.items[0]
    for (let i = 0; i < this.items.length - 1; i++) {
      this.items[i] = this.items[i + 1]
    }
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
module.exports = PriorityQueue