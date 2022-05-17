class QueueElement {
  constructor(element, priority) {
    this.element = element
    this.priority = priority
  }
}

// 用数组实现的优先级队列有个缺点：就是添加元素的时候，需要对数组后面的所有项都进行移动，使用链表则不存在2这种问题，但是链表的查找时间复杂度是O（N）,可以使用hashMap来把链表的复杂度降低为O(1)
// 可是问题来了，既然是队列，为什么要查找呢？
class PriorityQueue {
  // 优先级队列(优先级越大，越早出队列)
  constructor() {
    this.items = []
  }

  // 插入
  enqueue(element, priority) {
    let newQueueElement = new QueueElement(element, priority)
    if (!this.items.length) {
      // 如果队列为空
      this.items.push(newQueueElement)
      return true
    }

    // 队列不为空
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority >= newQueueElement.priority) {
        // 优先级相同的时候符合队列,所以要用>=
        let j = this.items.length
        while (j > i) this.items[j] = this.items[--j]
        this.items[i] = newQueueElement
        return true
      }
    }
    // 说明newQueueElement优先级最高
    this.items.push(newQueueElement)
    return true
  }

  // 弹出
  dequeue() {
    return this.items.pop()
  }
}


let pq = new PriorityQueue()
pq.enqueue(1, 1)
pq.enqueue(2, 1)
pq.enqueue(3, 3)
console.log(pq.dequeue());
console.log(pq.dequeue());