class Node {
  constructor(element) {
    this.element = element
    this.prev = null
    this.next = null
  }
}

class DoubleLinedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = 0
  }

  // 1.尾部添加数据
  append(element) {
    let newNode = new Node(element)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
  }

  // 2.任意位置插入
  insert(position, element) {
    // 判断插入位置是否合法
    if ((position < 0 || position >= this.length) && position !== 0) return

    let newNode = new Node(element)

    if (!this.head) {
      // 链表为空
      this.head = newNode
      this.tail = newNode
    } else {
      // 链表不为空,寻找要插入位置之前的元素
      // 在首位插入
      if (position === 0) {
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
      } else {
        let index = 1
        let previous = this.head
        while (index++ !== position) {
          previous = previous.next
        }
        newNode.next = previous.next
        previous.next.prev = newNode
        previous.next = newNode
        newNode.prev = previous
      }
    }
    this.length++
  }

  // 3. 特定位置移除数据
  removeAt(position) {
    if (position < 0 || position >= this.length) return

    let temp
    let current = this.head
    let index = 0
    while (index++ !== position) {
      current = current.next
    }
    temp = current.element
    if (current === this.head) {
      current.next.prev = null
      this.head = current.next
    } else if (current === this.tail) {
      current.prev.next = null
      this.tail = current.prev
    } else {
      current.prev.next = current.next
      current.next.prev = current.prev
    }
    this.length--
      return temp
  }

  // 4.获取元素的位置
  indexOf(element) {
    let index = 0
    let current = this.head
    while (current.element !== element) {
      current = current.next
      index++
    }
    return index === this.length ? -1 : index
  }

  // 5.正向遍历
  forwardString() {
    let listString = ''
    let current = this.head
    while (current) {
      listString += '->' + current.element
      current = current.next
    }
    return listString.slice(2)
  }

  // 6. 反向遍历
  reverseString() {
    let listString = ''
    let current = this.tail
    while (current) {
      listString += '->' + current.element
      current = current.prev
    }
    return listString.slice(2)
  }

  // 7.查看链表
  toString() {
    return this.forwardString()
  }

  // 8.是否为空 
  isEmpty() {
    return this.length === 0
  }

  // 9.链表大小
  size() {
    return this.length
  }

  // 10.获取第一个元素
  getHead() {
    return this.head.element
  }

  // 11.获取最后一个元素
  getTail() {
    return this.tail.element
  }
}

module.exports = DoubleLinedList