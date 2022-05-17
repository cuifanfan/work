// valueOf返回数组本身
// toString返回由每个值的等效字符串以','拼接而成的字符串【对数组的每个值调用toString以得到最终的字符串】
// toLocalString会调用每个数组的toLocalString方法，然后把得到的字符串拼接起来
// join 以给定的字符把数组拼接为字符串，如果不传或者传入undefined，以默认的','分割
// 如果数组的某一项是null或undefined，则在上述方法的返回值中以空字符串拼接
let arr = [1, 2, 3, 4]
console.log(arr.valueOf() === arr); // true