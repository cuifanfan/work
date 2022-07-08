// Promise是现在比较流行的一种JavaScript异步编程解决方案.Promise.all返回一个Promise对象p1;接收一个由Promise对象组成的数组,当数组中所有的对象的状态为resolved或者有一个promise的状态rejected就确定该p1的状态,回调函数中是所有成功的promise对象的值,或者失败的错误信息

let p1 = Promise.resolve(1);

let p2 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve(2);
  }, 20000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(function () {
    reject('reject');
  }, 1000);
});

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) reject('not Array');
    let result = [];
    for (let promise of promises) {
      promise.then(
        (value) => {
          result.push(value);
          if (result.length === promises.length) resolve(result);
        },
        (error) => {
          reject(error); //需不需要break?
        }
      );
    }
  });
};

Promise.myAll([p1, p3, p2]).then((res) => {
  console.log(res);
});
