class Node {
  // 结点类
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.length = 0
    this.head = null
  }

  // 1.往链表中追加元素
  append(element) {
    let newNode = new Node(element)

    // 判断链表是否为空
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
    this.length++
  }

  // 2. 向链表中特定位置添加元素
  insert(position, element) {
    // 1.判断位置是否合法(不能在末尾插入，末尾使用append)
    if ((position < 0 || position >= this.length) && position != 0) return false

    let newNode = new Node(element)

    //  如果链表为空
    if (!this.head) {
      this.head = newNode
    } else {
      // 寻找插在哪个元素前
      if (position === 0) {
        newNode.next = this.head
        this.head = newNode
      } else {
        let index = 1
        let previous = this.head
        while (index++ !== position) {
          previous = previous.next
        }
        newNode.next = previous.next
        previous.next = newNode
      }
    }
    this.length++
      return true
  }

  // 3.从特定位置移除元素
  removeAt(position) {
    // 判断位置合法性
    if (position < 0 || position >= this.length) return

    // 找前一项
    // 移除第一项的时候
    let temp
    if (position === 0) {
      temp = this.head.element
      this.head = this.head ? this.head.next : null
    } else {
      let previous = this.head
      let index = 1
      while (index++ != position) {
        previous = previous.next
      }
      temp = previous.next.element
      previous.next = previous.next.next
    }
    this.length--
      return temp
  }

  // 4.获取元素位置
  indexOf(element) {
    let current = this.head
    let index = 0
    while (current) {
      if (current.element === element) return index
      current = current.next
      index++
    }
    if (index === this.length) return -1
  }

  // 5.根据元素删除
  remove(element) {
    if (this.length === 0) return
    let previous = this.head

    // 删除第一个元素时
    if (element === this.head.element) {
      this.head = this.head.next ? this.head.next : null
      this.length--
    } else if (this.length >= 2) {
      while (previous.next) {
        if (element === previous.next.element) {
          previous.next = previous.next.next
          return this.length--
        }
        previous = previous.next
      }
    }
  }

  // 6.判断链表是否为空
  isEmpty() {
    return this.length === 0
  }

  // 7.链表大小
  size() {
    return this.length
  }

  // 8.获取第一个结点
  getFirst() {
    return this.head.element
  }

  // 9.查看链表
  toString() {
    let listString = ''
    let current = this.head
    while (current) {
      listString += '->' + current.element
      current = current.next
    }
    return listString.slice(2)
  }
}


module.exports = LinkedList