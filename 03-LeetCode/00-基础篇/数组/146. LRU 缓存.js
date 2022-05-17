const {
  log
} = require("console");

function ListNode(key, value) {
  this.key = key
  this.value = value
  this.left = null
  this.right = null
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  // 使用双向链表+哈希表（把key-value存于双线链表中，然后每次用到关键字，直接把对应的关键字提前到链表头部）,哈希表维护关键字到链表中对应结点的映射，这样获取元素就是O(1)
  this.map = new Map() // 用map记录key-value
  this.capacity = capacity // 记录map的容量
  this.count = 0 // 记录map键值对的数量
  this.head = null // 双向链表的头部结点
  this.tail = null // 双向链表的尾部结点
};

LRUCache.prototype.insertHead = function(node) {
  // 如果是头结点
  if (node === this.head) return true

  // 如果是尾结点
  if (node === this.tail) {
    // 修改尾部指向
    this.tail = this.tail.left
    this.tail.right = null
  } else {
    // 是中间结点
    node.left.right = node.right
    node.right.left = node.left
  }

  // 把结点插入头部
  node.left = null
  node.right = this.head
  this.head.left = node
  this.head = node
  return true
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.map.has(key)) return -1

  let targetNode = this.map.get(key)
  this.insertHead(targetNode)
  return targetNode.value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  // 如果关键字已经存在，修改关键字对应的值，然后把关键字提前到链表头部
  if (this.map.has(key)) {
    let targetNode = this.map.get(key)
    targetNode.value = value
    this.insertHead(targetNode)
    return true
  }

  // 关键字不存在
  let newNode = new ListNode(key, value)
  this.map.set(key, newNode)
  if (this.count < this.capacity) {
    // map容器没满
    if (!this.head) {
      // (1)如果链表为空
      this.head = newNode
      this.tail = newNode
    } else {
      // (2)如果链表不为空
      newNode.right = this.head
      this.head.left = newNode
      this.head = newNode
    }
    this.count++
  } else {
    // 删除末尾的元素,然后把新元素插入到头部
    this.map.delete(this.tail.key)

    if (!this.tail.left) {
      // 只有一个元素
      this.head = this.tail = newNode
      return true
    }

    this.tail = this.tail.left
    this.tail.right = null

    // 把新元素插到头部
    newNode.right = this.head
    this.head.left = newNode
    this.head = newNode
  }
  return true
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
// console.log(lRUCache.map);
// console.log(lRUCache.head.value, lRUCache.tail.value);
console.log(lRUCache.get(1));; // 返回 1
// console.log(lRUCache.map);
// console.log(lRUCache.head.value, lRUCache.tail.value);

lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
// console.log(lRUCache.map);
// console.log(lRUCache.head.value, lRUCache.tail.value);

console.log(lRUCache.get(2));; // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
console.log(lRUCache.get(1)) // 返回 -1 (未找到)
console.log(lRUCache.get(3));; // 返回 3
console.log(lRUCache.get(4));; // 返回 4