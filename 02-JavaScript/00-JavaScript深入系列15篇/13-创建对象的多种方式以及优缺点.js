// 1.工厂模式
function createPerson(name) {
  var o = new Object()
  o.name = name
  o.getName = function() {
    console.log(this.name);
  }
  return o
}

var perosn1 = createPerson('cuifan')

// 缺点：对象无法识别，所有对象指向同一个原型

// 2.构造函数模式
function Person(name) {
  this.name = name;
  this.getName = function() {
    console.log(this.name);
  };
}

var person1 = new Person('kevin');

// 优点：实例可以识别为一个特定的类型
// 缺点：每次创建实例的时候，每个方法都要被创建一次

// 2.1 构造函数优化：
function Person(name) {
  this.name = name;
  this.getName = function() {
    console.log(this.name);
  };
}

var person1 = new Person('kevin');
// 优点：解决了每个方法都要被重建的问题
// 缺点：函数多的时候封装性差

// 3.原型模式
function Person(name) {

}

Person.prototype.name = '崔帆'
Person.prototype.getName = function() {
  console.log(this.name);
}

// 优点：方法不会被重建
// 缺点：1.所有属性和方法都共享 
// 2.不能初始化参数

// 3.1 原型模式优化
function Person(name) {

}

Person.prototype = {
  name: 'cuifan',
  getName() {
    console.log(this.name);
  },
  constructor: Person
}

// 原型模式的问题：1.弱化了向构造函传递初始化参数的能力
// 2.属性在实例之间共享

// 4.组合模式
function Person(name) {
  this.name = name
}

Person.prototype = {
  constructor: Person,
  getName: function() {
    console.log(this.name);
  }
}

// 优点：该共享的共享、该私有的私有
// 缺点：更好的封装性

// 4.1 动态原型模式
function Person(name) {
  this.name = name
  if (typeof this.getName !== 'function') {
    Person.prototype.getName = function() {
      console.log(this.name);
    }
  }
}

// 注意:使用动态原型模式的时候,不能使用对象字面量重写原型
function Person(name) {
  this.name = name
  if (typeof this.getName !== 'function') {
    Person.prototype = {
      constructor: Person,
      getName: function() {
        console.log(this.name);
      }
    }
    return new Person(name)
  }
}

// 5.寄生构造函数模式
function Person(name) {
  var o = new Object()
  o.name = name
  o.getName = function() {
    console.log(this.name);
  }
  return o
}

var person1 = new Person('崔帆')

// 5.1稳妥构造函数模式
// 没有公共属性,而且函数中也不使用this
function Person() {
  let o = new Object()
  o.sayName = function(name) {
    console.log(name);
  }
  return o
}

// 与寄生构造函数的区别:不使用new操作符调用构造函数,新创建的实例方法不引用this
// 缺点:无法识别对象所属类型