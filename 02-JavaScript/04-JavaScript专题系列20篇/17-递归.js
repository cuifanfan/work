function factorial(n, res) {
  if (n == 1) return res
  return factorial(n - 1, n * res)
}

function partial(fn) {
  let args = [].slice.call(arguments, 1)
  return function() {
    let position = 0
    let len = args.length
    for (let i = 0; i < len; i++) {
      if (args[i] === '_') args[i] = arguments[position++]
    }
    while (position < arguments.length) args.push(arguments[position++])
    return fn.apply(this, args)
  }
}


let newFactorial = partial(factorial, '_', 1)
console.log(newFactorial(4));