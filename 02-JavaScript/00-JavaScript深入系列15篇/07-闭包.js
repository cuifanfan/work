// 闭包是指那些能够访问自由变量的函数
// 自由变量：既不是函数参数、也不是函数局部变量的变量
// 闭包 = 函数+函数能够访问的自由变量

// 上述的闭包是理论闭包，所有的JavaScript函数都是理论闭包

// 实践闭包：
//   创建函数的上下文已经销毁，但它仍然存在
//   能够访问自由变量

// var scope = "global scope";
// function checkscope () {
//   var scope = "local scope";
//   function f () {
//     return scope;
//   }
//   return f;
// }

// var foo = checkscope();
// console.log(foo());


var data = [];

for (var i = 0; i < 3; i++) {
  data[i] = function () {
    console.log(i);
  };
}

data[0]();
data[1]();
data[2]();


