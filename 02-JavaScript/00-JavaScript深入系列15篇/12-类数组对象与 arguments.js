// // 类数组对象转换为数组
// let arrayLike = {
//   0: '崔帆',
//   1: '李嘉敏',
//   2: '学弟',
//   length: 3
// }

// console.log(Array.prototype.map.call(arrayLike, item => item));
// console.log(Array.from(arrayLike));
// console.log(Array.prototype.slice.call(arrayLike));
// console.log(Array.prototype.concat.apply([], arrayLike));
// console.log(Array.prototype.splice.call(arrayLike, 0));

function foo(b, c, d) {
  console.log("实参的长度为：" + arguments.length)
}

console.log("形参的长度为：" + foo.length)

foo(1)

// 形参的长度为：3
// 实参的长度为：1