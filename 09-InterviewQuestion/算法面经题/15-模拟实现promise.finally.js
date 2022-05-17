Promise.prototype.myFinally = function(callback) {
  this.then(value =>
    Promise.resolve(callback()).then(() => value), err => Promise.resolve(callback()).then(() => err))
}

let p1 = new Promise((resolve, reject) => {
  resolve('resolve')
})

p1.then(res => {
  console.log(res);
})

p1.myFinally(() => {
  console.log('finally');
})