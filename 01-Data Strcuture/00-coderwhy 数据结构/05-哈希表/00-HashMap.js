// 哈希表：可以提供非常快速的插入、删除、查找操作
// 哈希表中的数据是没有顺序的，不能以一种固定的方式来遍历其中的元素

// 哈希化：大数字转换为数组范围下标的过程
// 哈希函数：将单词转为大数字、大数字进行哈希化的代码放在一个函数中
// 1.链地址法：
// 2.开放地址法：
// 删除操作时不能将元素设置为空(再次查找会出错)，需要特殊处理
// 2.1线性探测有问题：聚集
// 2.2 二次探测
// 2.3 再哈希法

// 哈希表的效率
// 线性：应该使装填因子保持在2/3以下，最好在1/2以下。另一方面，装填因子越低，对于给定量的数据项，就需要更多的空间
// 二次探测和再哈希法：



// 哈希函数的功能：把字符串转换为大数字、大数字进行哈希化
function hashFunc(str, max) {
  // 1.初始化hashCode的值
  var hashCode = 0

  // hashCode为大数字，为了保证大数字的唯一性，必须设置max大于str中的数字表示的字符范围

  // 这里采用ascll码，设置max的值为257
  // 2.计算得到hashCode
  for (let i = 0; i < str.length; i++) {
    hashCode = hashCode * 257 + str.charCodeAt(i)
  }

  // 3.哈希化得到小数字
  hashCode = hashCode % max
  return hashCode
}

// 使用链地址法实现哈希表

class HashMap {
  constructor() {
    this.storage = [] // 用作哈希表的数组
    this.length = 8 //  用作哈希表的数组的长度(这里也作为哈希表希望存储的元素的最大个数)
    this.count = 0 // 当前数据量
  }

  // 哈希函数
  hashFunc(str, max) {
    // 1.初始化hashCode的值
    var hashCode = 0
    str = String(str)

    // 2.计算得到hashCode
    let strLength = str.length
    for (let i = 0; i < strLength; i++) {
      hashCode = hashCode * 257 + str.charCodeAt(i)
    }

    // 3.哈希化得到小数字（max为用作哈希表的数组的长度）
    hashCode = hashCode % max
    return hashCode
  }

  // 1.插入(修改)数据
  put(key, value) {

    // 获取index
    let index = this.hashFunc(key, this.length)

    // 取出数组
    let bucket = this.storage[index]

    // 判断数组是否存在
    if (!bucket) {
      // 创建数组
      bucket = []
      this.storage[index] = bucket
    }

    // 判断是插入还是修改原来的值
    let overRide = false
    bucket.forEach(item => {
      if (item[0] === key) {
        item[1] = value
        return overRide = true
      }
    })

    if (overRide) return true

    // 插入值
    bucket[bucket.length] = [key, value ? value : key]
    this.count++

      // 判断是否进行扩容
      if (this.count > this.length * 0.75) {
        this.resize(this.length * 2)
      }
    return true
  }

  // 2.获取数据
  get(key) {
    let index = this.hashFunc(key, this.length)

    let bucket = this.storage[index]
    if (!bucket) return null
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) return bucket[0][1]
    }
    return null
  }

  // 3.删除数据
  remove(key) {
    let index = this.hashFunc(key, this.length)

    let bucket = this.storage[index]
      // 没有该数据
    if (!bucket) return null
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        this.count--
          // 判断是否需要缩小哈希表容量
          if (this.count > 8 && this.count < this.length * 0.25) {
            this.resize(Math.floor(this.length / 2))
          }
        return bucket.splice(i, 1)[0][1]
      }
    }
    return null
  }

  // 4.判断哈希表是否为空
  isEmpty() {
    return this.count === 0
  }

  // 5.获取哈希表中元素的个数
  size() {
    return this.count
  }

  // 6.哈希表扩容
  resize(newLength) {
    // 一般装填因子大于0.75时候进行扩容
    // 1.保存旧的哈希表内容
    var oldStorage = this.storage

    // 2.重置属性
    this.length = newLength
    this.count = 0
    this.storage = []

    // 3.把旧的值重新哈希化存储
    oldStorage.forEach(bucket => {
      if (bucket) {
        bucket.forEach(item => {
          this.put(item[0], item[1])
        })
      }
    })
  }

  // 7.判断一个数是否为质数
  isPrime(num) {
    let temp = Math.floor(Math.sqrt(num))
    for (let i = 2; i <= temp; i++) {
      if (num % i === 0) return false
    }
    return true
  }

  // 8.获取质数
  getPrime(num) {
    while (!this.isPrime(num)) num++
      return num
  }
}

module.exports = HashMap