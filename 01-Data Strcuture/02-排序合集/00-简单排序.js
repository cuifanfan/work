// 封装ArrayList
function ArrayList() {
  this.array = []

  ArrayList.prototype.insert = function(item) {
    this.array.push(item)
  }

  ArrayList.prototype.toString = function() {
    return this.array.join()
  }

  ArrayList.prototype.bubbleSort = function() {
    // 获取数组的长度
    let length = this.array.length

    for (let i = length - 1; i >= 0; i--) {
      for (var j = i - 1; j >= 0; j--) {
        if (this.array[i] < this.array[j]) {
          [this.array[i], this.array[j]] = [this.array[j], this.array[i]]
        }
      }
    }
  }

  ArrayList.prototype.selectionSort = function() {
    // 获取数组的长度
    let length = this.array.length

    for (let i = 0; i < length - 1; i++) {
      let min = i
      for (let j = min + 1; j < length; j++) {
        if (this.array[i] > this.array[j]) min = j
      }
      [this.array[i], this.array[min]] = [this.array[min], this.array[i]]
    }
  }

  ArrayList.prototype.insertionSort = function() {
    let length = this.array.length

    for (let i = 1; i < length; i++) {
      let j = i
      let temp = this.array[i]

      while (this.array[j - 1] > temp && j >= 1) {
        this.array[j] = this.array[j - 1]
        j--
      }

      this.array[j] = temp
    }
  }
}

// 初始化数据项
var list = new ArrayList()

list.insert(3)
list.insert(6)
list.insert(4)
list.insert(2)
list.insert(11)
list.insert(10)
list.insert(5)

console.log(list.toString());
// list.bubbleSort()
// list.selectionSort()
list.insertionSort()
console.log(list.toString());

// 冒泡排序：比较次数：n(n-1)/2;交换次数n(n-1)/4 比较和交换都是O(n²)
// 选择排序：比较次数：n(n-1)/2;交换次数n-1,交换次数O(N),比较次数O(N²)
// 插入排序：比较次数：最多是n(n-1)/2,平均值为n(n-1)/4,