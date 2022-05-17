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
    if (!this.head) {
      // 如果队列为空
      this.head = this.tail = newNode
      return true
    }

    // 队列不为空
    let current = this.head
    while (current) {
      if (current.priority >= newNode.priority) break
      current = current.next
    }

    if (!current) {
      // newNode的优先级最高,添加到尾部
      this.tail.next = newNode
      newNode.last = this.tail
      this.tail = newNode
      return true
    }

    if (!current.last) {
      // 如果是添加到头部
      current.last = newNode
      newNode.next = current
      this.head = newNode
      return true
    }

    // 添加到中间
    current.last.next = newNode
    newNode.last = current.last
    newNode.next = current
    current.last = newNode
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


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let pq = new PriorityQueue()
  nums.forEach(num => {
    pq.enqueue(num, num)
  })
  for (let i = 0; i < k - 1; i++) {
    pq.dequeue()
  }
  return pq.dequeue()
};

console.log(findKthLargest([-1, 2, 0], 2));