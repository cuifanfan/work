// 哈希表的插入、删除、查找都很快
// 但是哈希表的空间利用率不高、哈希表是无序的、不能按照特定序列遍历哈希表
// 哈希表不能很快找到最大值、最小值这些特殊的值 

// BST:二叉搜索树

class Node {
  // 结点类
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    // 保存根的属性
    this.root = null
  }

  // 1. 向树中插入数据
  insert(key) {
    let newNode = new Node(key)

    // 判断结点是否有值
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  // 2.先序遍历
  preOrderTraversal(handler) {
    this.preOrderTranversalNode(this.root, handler)
  }

  preOrderTranversalNode(node, handler) {
    if (node != null) {
      // 1.处理当前结点
      handler(node.key)

      // 2.遍历所有的左节点
      this.preOrderTranversalNode(node.left, handler)

      // 3.遍历所有的右结点
      this.preOrderTranversalNode(node.right, handler)
    }
  }

  // 3.中序遍历
  inOrderTraversal(handler) {
    this.inOrderTraversalNode(this.root, handler)
  }

  inOrderTraversalNode(node, handler) {
    if (node != null) {
      this.inOrderTraversalNode(node.left, handler)
      handler(node.key)
      this.inOrderTraversalNode(node.right, handler)
    }
  }

  // 4.后序遍历
  postOrderTraversal(handler) {
    this.postOrderTraversalNode(this.root, handler)
  }

  postOrderTraversalNode(node, handler) {
    if (node != null) {
      this.postOrderTraversalNode(node.left, handler)
      this.postOrderTraversalNode(node.right, handler)
      handler(node.key)
    }
  }

  // 5.获取最小值
  min() {
    let node = this.root
    while (node.left != null) node = node.left
    return node.key
  }

  // 5.获取最大值
  max() {
    let node = this.root
    while (node.right != null) node = node.right
    return node.key
  }

  // 6.搜索特定的值
  search(key) {
    return this.searchNode(this.root, key)
  }

  searchNode(node, key) {
    if (node.key < key) {
      return this.searchNode(node.right, key)
    } else if (node.key > key) {
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }

  // 7.删除结点
  remove(key) {
    // 定义临时保存的变量
    let current = this.root
    let parent = this.root
    let isLeftChild = true

    // 2.开始查找结点
    while (current.key !== key) {
      parent = current
      if (key < current.key) {
        isLeftChild = true
        current = current.left
      } else {
        isLeftChild = false
        current = current.right
      }
    }

    // 没有找到删除的数据
    if (current === null) return false

    if (current.left === null && current.right === null) {
      // 要删除的结点是叶子结点
      if (current === this.root) {
        // 如果要删除的结点是根结点
        this.root = null
      } else if (isLeftChild) {
        parent.left = null
      } else {
        parent.right = null
      }
    } else if (current.left && current.right) {
      // 要删除的节点是度为2的结点

      // 获得前驱
      let successor = current.left

      // 前驱的父结点
      let parentNode = successor
      while (successor.right != null) {
        parentNode = successor
        successor = successor.right
      }

      parentNode.right = successor.left
      successor.left = current.left
      successor.right = current.right
      if (current === this.root) {
        // 如果删除的是根结点
        this.root = successor
      } else if (isLeftChild) {
        parent.left = successor
      } else {
        parent.right = successor
      }


    } else {
      // 有一个子节点
      if (current === this.root) {
        // 如果为根结点
        this.root = current.left ? current.left : current.right
      } else if (isLeftChild) {
        parent.left = current.left ? current.left : current.right
      } else {
        parent.right = current.left ? current.left : current.right
      }
    }
  }
}
module.exports = BinarySearchTree
let b = new BinarySearchTree()
for (let i = 1; i < 8; i++) {
  b.insert(i)
}

function TreeBFS(node) {
  // 用于实现bfs的队列
  let queue = []
    // 返回的数组
  let arr = []

  // 把头部结点加入队列
  queue.unshift(node)
    // 加入队列后的结点设置为黑色
  node.color = 'black'

  while (queue.length) {
    // 从队列中取出一个元素
    let queueNode = queue.pop()


    if (queueNode.key !== '#') arr.push(queueNode.key)

    if (queueNode.left && queueNode.color !== 'black') {
      console.log(1);
      queue.unshift(queueNode.left)
      queueNode.left.color = 'black'
    }

    if (queueNode.right && queueNode.color !== 'black') {
      console.log(1);
      queue.unshift(queueNode.right)
      queueNode.right.color = 'black'
    }
  }
  return arr
}

console.log(TreeBFS(b.root));