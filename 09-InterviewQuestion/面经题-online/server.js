const express = require('express')

let people = {
  'cuifan': {
    userName: '崔帆',
    age: 20,
    hobbies: ['吃饭', '睡觉', '打游戏']
  },
  'simon': {
    userName: 'simon',
    age: 21,
    hobbies: ['吃饭', '睡觉', '打游戏']
  }
}
express()
  .get('/', (req, res) => {
    let {
      userName,
      callback
    } = req.query
    console.log(req.query);
    let userInfo = JSON.stringify(people[userName])
    res.end(`${callback}(${userInfo})`)
  })
  .listen(3000, () => {
    console.log('running...');
  })