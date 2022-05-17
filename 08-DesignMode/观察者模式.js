class Observer {
  constructor(name) {
    this.name = name
  }

  handle(name, state) {
    console.log(this.name + ':' + name + '的状态是:' + state);
  }
}

class Subject {
  constructor(name) {
    this.name = name
    this.observers = []
    this.state = '开心'
  }
  attach(observer) {
    // 添加观察者
    this.observers.push(observer)
  }
  setState(state) {
    // 设置状态
    this.state = state

    // 观察者们对变化做出响应
    this.observers.forEach(observer => {
      observer.handle(this.name, this.state)
    })
  }
}

let baby = new Subject('宝贝')
let father = new Observer('父亲')
let mother = new Observer('母亲')
baby.attach(father)
baby.attach(mother)
baby.setState('哭泣')