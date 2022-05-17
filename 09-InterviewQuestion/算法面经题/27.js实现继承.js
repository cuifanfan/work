// function Father(name) {
//   this.name = name || 'father'
//   this.sayName = function() {
//     console.log(this.name);
//   }
//   this.color = ['red', 'blue', 'green']
// }

// Father.prototype.age = 18
// Father.prototype.sayAge = function() {
//   console.log(this.age);
// }

// 1.原型链继承
// function Son(uname) {
//   this.uname = uname || 'son'
// }

// Son.prototype = new Father()
// let son = new Son()
// console.log(son.name);
// son.sayName()
// console.log(son.age);
// son.sayAge()

// 优点：
// 1. 易于实现
// 2. 父类新增原型方法、原型属性。子类能够立马访问到
// 缺点：
// 1. 无法实现多继承，因为原型一次只能被一个实例更改
// 2. 原型对象上的所有属性被所有实例共享
// 3. 创建子类实例的时候， 不能向父构造函数传递参数

// 2.构造函数继承（盗用构造函数）
// function Son(name, ...args) {
//   Father.apply(this, args)
//   this.name = name || "son"
// }

// let son = new Son('崔帆', '传递给父类的参数')
// console.log(son.name);
// son.sayName()

// 优点：
// 1. 解决了原型链继承中子类实例共享父类引用属性的问题
// 2. 创建子类实例的时候， 可以向父类传递参数
// 3. 可以实现多继承

// 缺点：
// 1. 实例只是子类的实例，而不是父类的实例（instanceof可以检测）
// 2. 只能继承父类实例上的属性和方法，不能继承其原型上的属性和方法
// 3. 无法实现父类原型对象上的函数复用，每个子例函数都有父类实例函数的副本，影响性能

// 3.组合继承（将原型链和盗用构造函数结合）
// function Son(uname, ...args) {
//   Father.apply(this, args)
//   this.name = uname || 'son'
// }

// Son.prototype = new Father()

// let son = new Son('崔帆', '传给父类的参数')
// console.log(son.name);
// console.log(son instanceof Son);
// console.log(son instanceof Father);
// son.sayAge()


// 优点：
// 1.弥补了构造继承的缺点，现在既可以继承实例的属性和方法，也可以继承原型的属性和方法
// 2.既是子类的实例，也是父类的实例
// 3.可以向父类传递参数
// 4.父类原型对象上的方法可以复用

// 缺点：
// 1.调用了两次父类构造函数，生成了两份实例
// 2.constructor指向问题（指向的是Father）

// 4.寄生式组合继承
// function Son(name) {
//   Father.call(this)
//   this.name = name || 'son'
// }
// (function() {
//   let NoneFun = function() {}
//   NoneFun.prototype = Father.prototype

//   // 这里也调用了两次构造函数，只是这个构造函数为空，代价几乎忽略不计
//   Son.prototype = new NoneFun()
//   Son.prototype.constructor = Son
// })()
// Son.prototype = Object.create(Father.prototype)
// Son.prototype.constructor = Son

// 优点：
// 1. 比较完美（ js实现继承首选方式）
// 缺点：
// 1.实现起来较为复杂（可通过Object.create简化）

class Father {
  constructor(name) {
    this.name = name || 'father'
  }

  static sayAge() {
    console.log('age');
  }
}

// 5.es6-Class继承
class Son extends Father {
  constructor(name) {
    // 不仅可以继承类，也可以继承构造函数

    // 关于super: ES6给类构造函数和静态方法添加了内部特性[[HomeObject]],指向定义该方法的对象。这个指针是动态赋值的，而且只能JavaScript引擎内部访问，super会始终定义为[[HomeObject]]的原型

    // 使用super要注意：不能单独引用，要么调用父类构造函数，要么调用父类静态方法
    super(name) // 相当于this = new super(name)
    console.log(super.sayAge());
    this.name = name || 'son'
  }

  // 类块中定义的方法作为原型方法
  // 类也支持设置获取和访问器
  // 静态类方法：执行不特定于实例的操作(其中this指向类本身)
  static sayHelloWorld() {
    // console.log('hello world');
    super.sayAge()
  }
}

// 类定义不支持显式在原型和类上添加属性，但可以在类的外部手动添加
// Son.uname = '添加的属性'
// let son = new Son('崔帆')
Son.sayHelloWorld()