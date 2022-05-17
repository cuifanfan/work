// 观察者模式
class Subject {
  constructor(name, state) {
    this.name = name
    this.state = state
    this.observers = [] // 记录观察者
  }

  // 添加观察者
  attach(observer) {
    this.observers.push(observer)
  }

  // 设置状态
  setState(state) {
    this.state = state
      // 通知观察者们
    this.observers.forEach(observer => {
      // 观察者对状态变化做出响应
      observer.handle(this)
    })
  }
}

class Observer {
  constructor(name) {
    this.name = name
  }

  handle(subject) {
    console.log(this.name + ': ' + subject.name + '的状态为:' + subject.state);
  }
}

let child = new Subject('孩子', '正常')
let father = new Observer('父亲')
let mother = new Observer('母亲')
child.attach(father)
child.attach(mother)
child.setState('饿了')