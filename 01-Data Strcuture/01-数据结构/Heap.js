// 堆通常指的就是二叉堆。二叉堆通常具有以下性质：
// （1）堆是一棵完全二叉树
// （2）堆序性：
//   - 最小堆:堆中任意结点C,其父节点P,都满足P<=C 
//   - 最大堆:堆中任意结点C,其父节点P,都满足P>=C

// 我们认为堆不是有序的，在最小堆中，根节点是最小的，第二小的肯定是根节点的某个节点，但是后续呢？没办法确定是根节点的另一个子节点还是当前较小的子节点的后代结点

// 但是一点是可以保证的：最大堆的最大值和最小堆的最小值是根结点 

// 应用：（1）优先队列：优先队列往往是用堆来实现的。
// （2）堆排序（选择类排序）

// 堆排序：
// （1）建立堆：根据元素关键字建立一个堆（最小堆/最大堆）
// （2）删除堆：删除根结点元素
// （3）调整堆：重新调整使其保持堆的结构性和堆序性

// 重复（2）（3）n次就完成了堆排序


// 堆从结构上来说，是一棵完全二叉树，完全二叉树有这样一个性质：
// 结点数为n，按层次从上到下，从左到右，从1开始编号，堆编号为i的结点，有：

// (1)如果i=1,则节点i是二叉树的根，没有父结点；
// 如果i>1，则其父节点的parent(i)编号为Math.floor(i/2)
// (2)如果2i>n，结点i无左孩子。否则左孩子的结点为2i
// 如果2i+1>n，则结点i没有右孩子，否则其右孩子的结点为2i+1

// 可以使用顺序结构存储完全二叉树，对于一个结点i，其父结点为Math.floor(i/2), 左子节点为2i，右子节点为2i+1



// let mh = new minHeap()
// mh.insert(4).insert(8).insert(7).insert(9).insert(12).insert(15).insert(16).insert(6)
// console.log(mh.array);
// console.log(mh.delete());
// console.log(mh.array);


class MaxHeap {
  constructor() {
    this.array = []
  }

  insert(value) {
    // 插入在最末尾，然后空穴上滤。也就是跟自己的父元素比较，比父元素小就可以了
    let i = this.array.length // 记录新添加的子结点的索引
    let j = Math.floor((i - 1) / 2) // 记录父节点的索引
    while (this.array[j] < value && j >= 0) {
      // 父节点比要添加的节点大
      this.array[i] = this.array[j]
      i = j
      j = Math.floor((j - 1) / 2)
    }
    this.array[i] = value
    return this
  }

  delete() {
    // 删除最后一个结点，但是结点值保留，删除第一个结点，但是结点位置保留
    let lastItem = this.array.pop()
      // 如果只有一个结点
    if (!this.array.length) return lastItem
    let deleteItem = this.array[0]
    this.array[0] = lastItem
    let i = 0 // 指向父节点
    while ((i * 2 + 2) < this.array.length) {
      // 两边元素存在
      let left = i * 2 + 1
      let right = i * 2 + 2

      // 父节点大于两个子节点
      if (this.array[i] >= Math.max(this.array[left], this.array[right])) break
      else {
        // 拿到大的那个子元素的索引
        let maxIndex = this.array[left] > this.right[right] ? left : right
        this.swap(maxIndex, i)
        i = maxIndex
      }
    }
    // 左边元素存在并且大于父节点
    if (this.array[i * 2 + 1] && this.array[i * 2 + 1] > this.array[i]) this.swap(i * 2 + 1, i)

    // 没有子元素啦！
    return deleteItem
  }

  swap(a, b) {
    [this.array[a], this.array[b]] = [this.array[b], this.array[a]]
  }
}

let mh = new MaxHeap()
let nums = [-1, 2, 0]
nums.forEach(n => mh.insert(n))
console.log(mh.array);
console.log(mh.delete());
console.log(mh.array);

console.log(mh.delete());
console.log(mh.array);
console.log(mh.delete());