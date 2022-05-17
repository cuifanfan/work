// /**
//  * @param {number[][]} matrix
//  * @param {number} target
//  * @return {boolean}
//  */
// function dichotomy(arr, target) {
//   let left = 0
//   let right = arr.length - 1
//   let mid = Math.floor((left + right) / 2)
//   while (left <= right) {
//     if (arr[mid] < target) {
//       left = mid + 1
//     } else if (arr[mid] > target) {
//       right = mid - 1
//     } else {
//       return true
//     }
//     mid = Math.floor((left + right) / 2)
//   }
//   return false
// }

// var searchMatrix = function(matrix, target) {
//   let flag = false
//   for (let arr of matrix) {
//     flag = dichotomy(arr, target)
//     if (flag) return true
//   }
//   return false
// };
// console.log(searchMatrix([
//   [1, 4, 7, 11, 15],
//   [2, 5, 8, 12, 19],
//   [3, 6, 9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ], 5));


// 使用bst
class Node {
  constructor(key) {
    this.left = null
    this.right = null
    this.value = key
  }
}


class BinarySerachTree {
  constructor() {
    this.root = null
  }

  // 插入结点
  insert(key) {
    let newNode = new Node(key)
    if (!this.root) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
    return this
  }

  insertNode(node, newNode) {
    if (node.value > newNode.value) {
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

  // 先序遍历
  preOrderTraversal(handler) {
    this.preOrderTranversalNode(this.root, handler)
  }

  preOrderTranversalNode(node, handler) {
    if (node) {
      handler(node.value)
      this.preOrderTranversalNode(node.left, handler)
      this.preOrderTranversalNode(node.right, handler)
    }
  }

  // 3.中序遍历
  inOrderTraversal(handler) {
    this.inOrderTraversalNode(this.root, handler)
  }

  inOrderTraversalNode(node, handler) {
    if (node) {
      this.inOrderTraversalNode(node.left, handler)
      handler(node.value)
      this.inOrderTraversalNode(node.right, handler)
    }
  }

  // 4.后序遍历
  postOrderTraversal(handler) {
    this.postOrderTraversalNode(this.root, handler)
  }

  postOrderTraversalNode(node, handler) {
    if (node) {
      this.postOrderTraversalNode(node.left, handler)
      this.postOrderTraversalNode(node.right, handler)
      handler(node.value)
    }
  }

  // 查找结点
  search(key) {
    return this.searchNode(this.root, key)
  }

  searchNode(node, key) {
    let flag = false
    while (node) {
      if (node.value > key) {
        node = node.left
      } else if (node.value < key) {
        node = node.right
      } else {
        flag = true
        break
      }
    }
    return flag
  }

  // 删除结点
  remove(key) {
    //分为三种情况，没有叶子结点、有一个叶子结点、有两个叶子结点
    let current = this.root
    let parentNode = null
    let isLeftChild = false // 记录是父节点的左孩子还是右孩子
    let temp = false // 元素不存在的时候直接返回false

    while (true) {
      if (current.value > key) {
        parentNode = current
        current = current.left
        isLeftChild = true
      } else if (current.value < key) {
        parentNode = current
        current = current.right
        isLeftChild = false
      } else {
        break
      }
    }

    if (current) {
      temp = current.value
      if (!current.left && !current.right) {
        // 没有叶子结点
        // (特殊情况为根结点)
        if (current === this.root) {
          this.root = null
        } else {
          if (isLeftChild) parentNode.left = null
          else parentNode.right = null
        }
      } else if (current.left && current.right) {
        // 如果是根节点
        let precursor = current.left // 前驱（左子树最大的结点）
        let precursorParentNode = precursor // 前驱的父结点

        while (precursor.right) {
          precursorParentNode = precursor
          precursor = precursor.right
        }
        let crt = precursor // precursor的左子树最小结点
        while (crt.left) crt = crt.left
        precursorParentNode.right = null
        crt.left = current.left
        precursor.right = current.right

        if (current === this.root) this.root = precursor
        else if (isLeftChild) parentNode.left = precursor
        else parentNode.right = precursor
      } else {
        // 一个叶子结点
        if (current === this.root) {
          // 如果为根结点
          this.root = current.left ? current.left : current.right
        } else {
          if (isLeftChild) {
            parentNode.left = current.left ? current.left : current.right
          } else {
            parentNode.right = current.left ? current.left : current.right
          }
        }
      }
    }
    return temp
  }
}