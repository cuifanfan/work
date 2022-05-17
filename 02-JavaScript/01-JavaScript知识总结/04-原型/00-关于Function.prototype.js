// https://juejin.cn/post/6844903575974313992

// Function.prototype是一个函数而非对象、Function.__proto__ === Function.prototype,why?

// 首先说明一点，不是所有的对象都是Object创建的。比如Object.prototype,是引擎自己创建的，而Function.prototype这个函数也是引擎自己创建的，并且通过__proto__将两者联系起来。即：Function.prototype.__proto__ === Object.prototype

let name = 'outer'
let a = {
  name: 'inner',
  b() {
    console.log(this.name)
  }
}

(false || a).b()