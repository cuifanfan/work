class SimpleSort {
  constructor() {
    this.array = []
  }

  insert(v) {
    this.array.push(v)
  }

  toString() {
    return this.array.join()
  }

  // 1.冒泡排序
  bubbleSort() {
    let length = this.array.length
    for (let i = 0; i < length; i++) {
      for (let j = i + 1; j < length; j++) {
        if (this.array[i] > this.array[j]) {
          let temp = this.array[i]
          this.array[i] = this.array[j]
          this.array[j] = temp
        }
      }
    }
  }

  // 2.选择排序
  selectionSort() {
    let length = this.array.length
    for (let i = 0; i < length; i++) {
      let min = i
      for (let j = i + 1; j < length; j++) {
        if (this.array[min] > this.array[j]) min = j
      }
      let temp = this.array[i]
      this.array[i] = this.array[min]
      this.array[min] = temp
    }
  }

  // 3.插入排序
  insertionSort() {
    let length = this.array.length
    for (let i = 1; i < length; i++) {
      let temp = this.array[i]
      let j = i - 1
      while (j >= 0 && this.array[j] > temp) {
        this.array[j + 1] = this.array[j]
        j--
      }
      this.array[j + 1] = temp
    }
  }
}

let s = new SimpleSort()
s.insert(3)
s.insert(6)
s.insert(4)
s.insert(2)
s.insert(11)
s.insert(10)
s.insert(5)
  // s.bubbleSort()
  // s.selectionSort()
s.insertionSort()
console.log(s.toString());