// ES6给类构造函数和静态方法都添加了[[HomeObject]] 特性， 指向定义该方法的对象， 只能在js引擎内部访问， super被始终设置为[[HomeObject]]的原型(也就是父类)

// 使用的时候要注意：
// 1.不能单独引用类super，要么用它来调用父类构造函数，要么引用父类静态方法
// 2.子类在构造函数内部调用super(参数)之后才能访问this,相当于执行了
// super.constructor.call(this,参数)
// 3.如果子类没有定义类构造函数，在实例化的时候会自动调用super()，并传入全部参数,如果派生类中显式定义了类i构造函数，要么返回一个对象，要么调用super()


// new 一个类的过程：
// 1.调用super():创建父类实例 super():this = new super(参数) 
// 2.使用子类构造函数修饰父类实例 this.__proto__ = Sub.prototype
// 3.return this 


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
//     super(name) // 相当于 Super.call(this,name), 盗用构造函数
//     this.age = age
//   }
// }

// let sub = new Sub('崔帆', 18)
// sub.sayName()

// class Sub extends Super babel中解析：
// （1）Sub.__proto__ = Object.create(Super)
// （2）Sub.prototype = Object.create(Super.prototype)
// super: [[HomeObject]] 的原型 => Super


function Super() {}

function Sub() {}

Sub.prototype = new Super()
Sub.prototype.constructor = Sub

console.log(Sub.__proto__ === Function.prototype);