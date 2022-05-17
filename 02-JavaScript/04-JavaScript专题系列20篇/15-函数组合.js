function compose() {
  let args = arguments
  let start = args.length - 1
  return function() {
    let i = start

    // 先调用最内层函数，得到调用结果
    let result = args[start].apply(this, arguments)
    while (i--) result = args[i].apply(this, result)
    return result
  }
}

// 需求：输入 'kevin daisy kelly'，返回 'K.D.K'

let initials = function(name) {

}