// 1.arguments对象只有function形式声明的函数才有（箭头函数没有）
// 有一个callee属性指针，指向arguments所在的函数

// 2.函数有一个属性caller,arguments.callee.caller指的时调用当前函数的函数
// 3.函数对象还有length属性：保存形参的个数
// 4.对函数对象而言，继承的方法toString和toLocaleString始终返回函数的代码，返回格式因浏览器而异。继承的方法valueOf始终返回函数本身
function foo() {

}
console.log(foo === foo.valueOf());

// 对于arguments,传入的参数会与实参共享。当没有传入的时候，彼此之间不共享