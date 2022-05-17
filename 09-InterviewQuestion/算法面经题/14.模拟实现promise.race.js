Promise.myRace = function(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      promise.then(value => {
        resolve(value)
      }, error => {
        reject(error)
      })
    })
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

Promise.myRace([p1, p2, p3]).then(res => {
  console.log(res);
})