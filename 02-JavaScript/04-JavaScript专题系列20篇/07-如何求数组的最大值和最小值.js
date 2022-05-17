// 文章链接：https://jerryzou.com/posts/dive-into-deep-clone-in-javascript/
// Math.max()：
// 注意：1.任一参数如果不能转换为数值、则结果为NaN
// 2.如果没有参数、则为-Infinity(Math.min为Infinity)
// console.log(Number(undefined));
// console.log(Number(null));

// 通过reduce方法
let arr = [8, 5, 66, 23, 4, 98, 52, 6]
  // let max = arr.reduce((prev, curr) => {
  //   return Math.max(prev, curr)
  // })
  // console.log(max);

// 排序
// arr.sort((x, y) => x - y)
// console.log(arr[arr.length - 1]);

// eval函数
// let max = eval('Math.max(' + arr + ')')
// console.log(max);

// apply方法
// console.log(Math.max.apply(null, arr));

// ES6
// console.log(Math.max(...arr));