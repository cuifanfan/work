class Node {
  constructor(value, priority) {
    this.value = value
    this.priority = priority
    this.next = null
    this.last = null
  }
}

class PriorityQueue {
  constructor() {
    this.head = null
    this.tail = null
  }

  // 添加元素
  enqueue(value, priority) {
    let newNode = new Node(value, priority)

    // 队列为空
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return true
    }

    // 队列不为空
    let current = this.head
    let taegetNode = null
    while (current) {
      if (current.priority <= newNode.priority) {
        taegetNode = current
      } else {
        break
      }
      current = current.next
    }

    // 插入在头部
    if (!taegetNode) {
      newNode.next = this.head
      this.head.last = newNode
      this.head = newNode
      return true
    }
    // 插入在尾部
    if (taegetNode === this.tail) {
      taegetNode.next = newNode
      newNode.last = taegetNode
      this.tail = newNode
    } else {
      // 插入在中部
      newNode.next = taegetNode.next
      newNode.last = taegetNode
      taegetNode.next = newNode
    }
    return true
  }

  // 删除元素
  dequeue() {
    let temp = this.tail.value
    if (!this.tail.last) {
      this.head = this.tail = null
    } else {
      this.tail = this.tail.last
      this.tail.next = null
    }
    return temp
  }
}

var findKthLargest = function(nums, k) {
  // 使用最大生成堆
  // 把元素全部插入到堆中
  let pq = new PriorityQueue()
  nums.forEach(num => pq.enqueue(num, num))
  while (--k) pq.dequeue()
  return pq.dequeue()
};