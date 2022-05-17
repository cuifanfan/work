class Set {
  constructor() {
    this.items = []
  }

  // 1.添加新值
  add(value) {
    if (this.has(value)) return
    this.items[this.items.length] = value
  }

  // 2.判断集合中是否有该值
  has(value) {
    return this.items.some(item => item === value)
  }

  // 3.从集合中删除某个元素
  remove(value) {
    if (!this.has(value)) return false
    this.items.forEach((item, index, array) => {
      if (item === value) {
        for (let i = index; i < array.length; i++) {
          array[i] = array[i + 1]
        }
        array.length--
          return true
      }
    })
  }

  // 4.values方法获取集合中的所有值
  values() {
    return this.items
  }

  // 5.获取集合的大小
  size() {
    return this.items.length
  }

  // 6.清空集合中的所有值
  clear() {
    this.items = []
  }
}
module.exports = Set