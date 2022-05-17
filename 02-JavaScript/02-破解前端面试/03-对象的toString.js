// var a = ?
// if (a == 1 && a == 2 && a == 3) {
//   console.log(1);
// }

// 文章链接：https://www.jianshu.com/p/25001441ffba
a = {
  num: 1,
  // valueOf() {
  //   return this.num++
  // }
  toString() {
    return this.num++
  }
}

// 1.对象在进行拼接和比较的时候，会先调用valueOf方法，一般情况下valueOf方法指向自身
// let obj = {}
// console.log(obj.valueOf() === obj); // true

// 2.如果valueOf返回值为对象，则会调用对象的toString方法。对象没有该方法就会返回 [object ObjectName] 其中ObjectName是具体的对象类型

var num = 1
Object.defineProperty('window', 'b', {
  get() {
    return this.num++
  }
})
if (b == 1 && b == 2 && b == 3) {
  console.log(1);
}