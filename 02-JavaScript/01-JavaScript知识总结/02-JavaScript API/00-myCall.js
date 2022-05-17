var foo = {
  value: 'foo'
}
var value = 'window'

function bar(uname, age) {
  console.log(this.value);
  console.log(uname);
  console.log(age);
}


// bar.call(foo, '崔帆', 20)
Function.prototype.myCall = function(context, ...params) {
  // context如果为null或者undefined,让this指向window
  context = context ? Object(context) : window

  context.fn = this
  let result = context.fn(...params)
  delete context.fn
  return result
}

bar.myCall(foo, '崔帆', 20)


Function.prototype.myApply = function(context, arr) {
  // context为null或者undefined时，让this指向window
  context = context ? Object(context) : window

  context.fn = this
  let result = context.fn(...arr)
  delete context.fn
  return result
}

bar.myApply(foo, ['崔帆', 20])