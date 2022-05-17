// class Super {
//   constructor(name) {
//     this.name = name
//   }

//   // 直接定义在类上的，实例不会有，子类可以继承
//   static sayHello() {
//     console.log('hello');
//   }

//   // 是定义在原型上的，子类会继承
//   sayName() {
//     console.log(this.name);
//   }
// }

// class Sub extends Super {
//   constructor(name, age) {
//     // super就是[[HomeObject]] 的原型， 也就是Sub.__prototype__ === Super
//     super(name) // 相当于 this = new Super(name)
//     this.age = age
//   }
// }

// let sub = new Sub('崔帆', 18)
// sub.sayName()

// class Sub extends Super babel中解析：
// （1）Sub.__proto__ = Object.create(Super)
// （2）Sub.prototype = Object.create(Super.prototype)
// super: [[HomeObject]] 的原型 => Super


// function Super() {}

// function Sub() {}

// Sub.prototype = new Super()
// Sub.prototype.constructor = Sub

// console.log(Sub.__proto__ === Function.prototype);

// 还有一点不一样的地方：
// ES5的继承先生成子类实例，再调用父类构造函数修饰实例
// ES6的继承先生成父类实例，再调用子类的构造函数修饰父类实例
// 这个差别使得ES6可以继承内置对象