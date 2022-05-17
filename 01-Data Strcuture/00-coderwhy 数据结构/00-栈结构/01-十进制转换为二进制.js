let Stack = require('./00-Stack')

let s = new Stack()
let num = 30
while (num != 0) {
  s.push(num % 2)
  num = Math.floor(num / 2)
}
let str = ''
while (!s.isEmpty()) {
  str += s.pop()
}
console.log(str);