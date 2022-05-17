var foo = {
  value: 1
};
var value = 100

function bar(name, age) {
  console.log(name);
  console.log(age);
  console.log(this.value);
}

// bar.call(foo); // 1


Function.prototype.call1 = function(context, ...params) {

  // 如果this为null，让其指向window
  context = context ? Object(context) : window

  // 获取调用call的函数，让它成为对象的属性
  context.fn = this
  let result = context.fn(...params)
  delete context.fn
  return result
}

Function.prototype.apply1 = function(context, arr) {
  // 如果this为null,让其指向window
  context = context ? Object(context) : window

  // 获取调用apply1的函数，让他成为对象context的属性
  context.fn = this
  let result = context.fn(...arr)
  delete context.fn
  return result
}

bar.call1(foo, 'cuifan', 18)
bar.apply1(foo, ['崔帆', 11])

// bar.call1(null, 'cuifan', 19)

// bar.call(true, 'cuifan', 19)

// bar.call(null, 'cuifan', '19')