// 1.原型链继承
function Parent() {
  this.name = 'kevin'
}

Parent.prototype.getName = function() {
  console.log(this.name);
}

function Child() {}

Child.prototype = new Parent()

var child1 = new Child()

child1.getName()

// 缺点：1.不能给父构造函数传递参数
// 2.定义在父构造函数中的属性被所有实例共享

// 2.盗用构造函数
function Parent() {
  this.names = ['kevin', 'daisy'];
}

function Child() {
  Parent.call(this, ...arguments)
}

// 1.可以在Child中向parent传参
// 2.避免继承的属性和函数被共享

// 缺点：
// 定义函数的时候，每次创建实例都会创建一遍方法

// 3.组合继承
// 原型链继承和盗用构造函数
function Parent(uname) {
  this.uname = uname
}

function Child() {
  Parent.call(this, ...arguments)
}


Child.prototype = new Parent('崔帆')

// 缺点：父构造函数被调用了两次

// 4.原型式继承
function createObj(o) {
  // 返回一个原型是o的对象
  function F() {}
  F.prototype = o
  return new F()
}

// 缺点：共享引用类型的值

// 5.寄生式继承
function createObj(o) {
  var clone = Object.create(o)
  clone.sayName = function() {
    console.log('hi');
  }
  return clone
}

// 缺点： 每次创建对象都会创建一边遍方法

// 6.寄生式组合继承
function Parent(uname, year) {
  this.uname = uname
  this.year = year
}

function Child(age, ...arr) {
  Parent.call(this, ...arr)
  this.age = age
}

// Child.prototype = Object.create(Parent.prototype)
function F() {}
F.prototype = Parent.prototype
Child.prototype = new F()

let cuifan = new Child(20, '崔帆', 2001)
console.log(cuifan);