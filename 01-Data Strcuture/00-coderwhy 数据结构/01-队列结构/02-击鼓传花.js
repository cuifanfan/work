let Queue = require('./00-Queue')

let q = new Queue()
let num = 5
let users = ['崔帆', '李嘉敏', '崔健', '洪付敏', '学弟', '蔡倩']
users.forEach(user => {
  q.enqueue(user)
})
while (q.size > 1) {
  for (let i = 1; i < num; i++) {
    q.enqueue(q.dequeue())
  }
  q.dequeue()
}
console.log(q.dequeue());