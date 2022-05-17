let e = {
  callbacks: [],
  on(callback) {
    this.callbacks.push(callback)
  },
  emit(value) {
    this.callbacks.forEach(callback => {
      callback && callback(value)
    })
  }
}

e.on((value) => {
  console.log('张三订阅了' + value);
})

e.on((value) => {
  console.log('李四订阅了' + value);
})

e.on((value) => {
  console.log('王五订阅了' + value);
})

e.emit('湖北日报')