// 文章链接：https://juejin.cn/post/6844903479429824526
// 使用构造函数创建对象发生了什么?
// 1. 在内存中新建一个对象
// 2. 这个新对象的[[Prototype]]特性被赋值为构造函数的prototype属性(指定原型)
// 3. 构造函数中的this被赋值为这个新对象(this指向新对象)
// 4. 执行构造函数中的代码
// 5. 如果返回非空对象，则返回该对象。否则，返回新建对象
console.log(Function.__proto__ === Function.prototype);
console.log(Object.getPrototypeOf(String));
console.log(Object.getPrototypeOf(Array) === Function.prototype)