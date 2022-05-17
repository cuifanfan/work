let e = {
  callbacks: [],
  on(callback) {
    // 订阅
    this.callbacks.push(callback)
  },
  emit(value) {
    this.callbacks.forEach(callback => {
      callback && callback(value)
    })
  }
}

// e是一家报刊
e.on(function(value) {
  console.log('张三订阅了：' + value);
})

e.on(function(value) {
  console.log('李四订阅了：' + value);
})

e.on(function(value) {
  console.log('王五订阅了：' + value);
})

// e到货了通知订阅者们
e.emit('湖北日报')