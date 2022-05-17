Promise.myAll = function(promises) {
  return new Promise((resolve, reject) => {
    let result = []
    let count = 0
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(value => {
        result.push(value)
        if (++count === promises.length) {
          resolve(result)
        }
      }, error => {
        reject(error)
      })
    }
  })
}

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1')
  }, 1000)
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2')
  }, 2000)
})

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3')
  }, 5000)
})

Promise.myAll([p1, p2, p3]).then(result => {
  console.log(result);
})